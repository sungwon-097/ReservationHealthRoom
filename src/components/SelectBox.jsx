export const SelectBox = (props) => {
    return (
            <select
                name={props.name}
                onChange={props.onChange}
                defaultValue={props.options[0]}
                style={{width:"10.6rem"}}
            >
                {props.options.map((option) => (
                        <option
                            key={option.value}
                            value={option.value}
                        >
                            {option.name}
                        </option>
                ))}
            </select>
    );
};
