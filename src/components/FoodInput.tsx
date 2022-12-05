import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Form = styled.form`
    margin-top:30px;

    display:flex;
`

const InputBoxContainer = styled.div`
`;

const activeBorderRadius = '16px 16px 0 0'
const inactiveBorderRadius = '16px 16px 16px 16px'

interface Props{
    isHaveInputValue: Boolean;
}

const InputBox = styled.div<Props>`
  display: flex;
  flex-direction: row;
  justify-content:center;
  align-items:center;

  padding: 10px 10px;
  border: 2px solid ${(props) => props.theme.secondaryColor};
  border-radius: ${(props) => props.isHaveInputValue ? activeBorderRadius : inactiveBorderRadius};
`
const Input = styled.input`
  flex: 1 0 0;

  margin: 0;
  padding: 0;

  background-color: transparent;

  border: none;
  outline: none;  
`

const DeleteButton = styled.div`
  cursor: pointer;
  font-weight:bolder;
`

const DropDownBox = styled.ul`
  display: block;
  padding: 4px 0;

  border: 1px solid rgba(0, 0, 0, 0.3);
  border-top: none;
  border-radius: 0 0 16px 16px;

  list-style-type: none;
`

const DropDownItem = styled.li`
  padding: 4px 16px;

  &.selected {
    background-color: ${(props) => props.theme.secondaryColor};
  }
`

const SizeSelect = styled.div`
    margin-left:30px;

    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:flex-start;

    span{
        font-size:24px;
        color:grey;
    }
    span:nth-child(1){
    }
    select{
        margin-left:10px;
        margin-right:10px;
    }
`
interface props {
  setValues:(_value: string, _code:string, _much: string)=>void;
}




const FoodInput = ({setValues}: props) => {
    const [testList, setTestList] = useState<{ [foodName:string]: string }>({});
    const selectList = ["0.3인분", "0.5인분", "1인분", "2인분"];
    const [inputValue, setInputValue] = useState('');
    const [isHaveInputValue, setIsHaveInputValue] = useState(false);
    const [dropDownList, setDropDownList] = useState(Object.keys(testList));
    const [dropDownItemIndex, setDropDownItemIndex] = useState(-1);
    const [selected, setSelected] = useState("");

    const getFoodList = async () => {
      await axios({
        url:"https://backend-server.fly.dev/api/getFoodList",
        method:"get",
        // headers: {
        //   'Access-Control-Allow-Origin': true,
        // },
      }).then(function(response){
        setTestList(response.data.foods);
      });  
    }

    const onSelectChange = (event:React.FormEvent<HTMLSelectElement>) => {
        event.preventDefault();
        setSelected(((event.target) as any).value); 
        setValues(inputValue, testList[inputValue], ((event.target) as any).value);
    }

    const showDropDownList = () => {
        if (inputValue === '') {
          setIsHaveInputValue(false)
          setDropDownList([])
        } else {
          const choosenTextList = Object.keys(testList).filter(textItem =>
            textItem.includes(inputValue)
          )
          setDropDownList(choosenTextList)
        }
    }
    const changeInputValue = (event:React.FormEvent<HTMLInputElement>) => {
      event.preventDefault();
      setInputValue(((event.target) as any).value);
      setValues(inputValue, testList[inputValue], selected);
      setIsHaveInputValue(true)
    }
  
    const clickDropDownItem = (clickedItem:string) => {
      setInputValue(clickedItem);
      setValues(inputValue, testList[inputValue], selected);
      setIsHaveInputValue(false);
    }
    const handleDropDownKey = (event:React.KeyboardEvent) => {
        if (isHaveInputValue) {
          if (
            event.key === 'ArrowDown' &&
            dropDownList.length - 1 > dropDownItemIndex
          ) {
            setDropDownItemIndex(dropDownItemIndex + 1)
          }
    
          if (event.key === 'ArrowUp' && dropDownItemIndex >= 0)
            setDropDownItemIndex(dropDownItemIndex - 1)
          if (event.key === 'Enter' && dropDownItemIndex >= 0) {
            clickDropDownItem(dropDownList[dropDownItemIndex])
            setDropDownItemIndex(-1)
          }
        }
      }

    const onSubmitFood = (event: React.FormEvent) => {
      event.preventDefault();
      setValues(inputValue, testList[inputValue], selected);
    }
    useEffect(() => {
      getFoodList();
    }, [])
    useEffect(() => {
      showDropDownList();
    }, [inputValue]);

    return(
        <Form onSubmit={onSubmitFood}>
            <InputBoxContainer>
                <InputBox isHaveInputValue={isHaveInputValue}>
                    <Input
                      type='text'
                      value={inputValue}
                      onChange={changeInputValue}
                      onKeyUp={handleDropDownKey}
                    />
                    <DeleteButton onClick={() => setInputValue('')}>&times;</DeleteButton>
                </InputBox>
                {isHaveInputValue && (
                    <DropDownBox>
                    {dropDownList.length === 0 && (
                        <DropDownItem>해당하는 단어가 없습니다</DropDownItem>
                    )}
                    {dropDownList.map((dropDownItem, dropDownIndex) => {
                        return (
                        <DropDownItem
                            key={dropDownIndex}
                            onClick={() => clickDropDownItem(dropDownItem)}
                            onMouseOver={() => setDropDownItemIndex(dropDownIndex)}
                            className={
                            dropDownItemIndex === dropDownIndex ? 'selected' : ''
                            }
                        >
                            {dropDownItem}
                        </DropDownItem>
                        )
                    })}
                    </DropDownBox>
                )}
            </InputBoxContainer>
            {
                inputValue !== "" &&
                <SizeSelect>
                    <span>을</span>
                    <select onChange={onSelectChange} value={selected}>
                        <option value="0" key="0">선택해주세요!</option>
                        {selectList.map((item) => (
                            <option value={item} key={item}>{item}</option>
                        ))}
                    </select>
                    <span> 정도 먹었어요 </span>
                </SizeSelect> 
            }
        </Form>
    )
}

export default FoodInput;