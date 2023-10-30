import {Button, List} from "../App";

export const AddSelected = (props) => {
    return(
        <>
            {props.selectedDate &&
                <>
                    <List>{props.selectedDate.toLocaleDateString(
                        'ko-KR',
                        {weekday: 'long',year: 'numeric',month: 'long',day: 'numeric'}
                    )} {props.params.useStTime}~{props.params.useEdTime}
                    </List>
                    <Button onClick={props.handleClick}>예약 리스트 추가</Button>
                </>
            }
        </>
    )
}