import {Button} from 'react-bootstrap';
import "../scss/witbtn.scss"

export const WhiteBtn = (btn_name, newFn) => {
	return (
		<>
			<Button className="white-btn-nice" onClick={newFn}>{btn_name}</Button>
		</>
	);
};
 