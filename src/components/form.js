import React, { useEffect, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineBars } from "react-icons/ai";
import { BsPlusLg } from "react-icons/bs";

const Formcontrol = () => {
	const [text, setText] = useState({
		add: "",
		place: "",
		time: "",
		duration: "",
	});

	const onChange = (e) => {
		// setText({e.target.value});
	};
	const onSubmit = (e) => {
		e.prevent.default();
	};

	useEffect(() => {
		console.log(text);
	}, [text]);
	return (
		<div className="main">
			<div className="mainDiv">
				<div className="container">
					<div className="heading">
						<div>
							<AiOutlineArrowLeft />
						</div>
						<div className="add">
							<p>Add item</p>
						</div>
						<div>
							<AiOutlineBars />
						</div>
					</div>
					<form className="myform" onSubmit={onSubmit}>
						<div>
							<select className="selection" name="select">
								<option value="business">business</option>
								<option value="person">person</option>
							</select>
						</div>
						<div>
							<input
								name="add"
								placeholder="Add task"
								type="text"
								value={text.add}
								onChange={onChange}
							/>
						</div>
						<div>
							<input
								name="place"
								placeholder="Place"
								type="text"
								value={text.place}
								onChange={onChange}
							/>
						</div>
						<div>
							<input
								name="time"
								placeholder="Time"
								type="text"
								value={text.time}
								onChange={onChange}
							/>
						</div>
						<div>
							<input
								name="duration"
								placeholder="Duration"
								type="text"
								value={text.duration}
								onChange={onChange}
							/>
						</div>
					</form>
					<button className="myButton">Add Task</button>
				</div>
				<button className="btn">
					<BsPlusLg />
				</button>
			</div>
		</div>
	);
};

export default Formcontrol;
