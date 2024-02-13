import React, { useState } from "react";
import { login } from "../../redux/slices/usersSlice";
import { useDispatch } from "react-redux";

const cred = {
	username: "geek",
	password: "1234",
};

const LoginPage = () => {
	const [userInfo, setUserInfo] = useState({
		username: "",
		password: "",
	});
	const dispatch = useDispatch();

	const onSubmitHandler = (e) => {
		e.preventDevault();
		if (
			userInfo.username === cred.username &&
			userInfo.password === cred.password
		) {
			const user = {
				name: userInfo.username,
				lastLoginTime: new Date(),
				isAuthenticated: true,
			};
			dispatch(login(user));
		} else {
			alert("try again");
			setUserInfo({ username: "", password: "" });
		}
	};

	const onChangeHandler = (e) => {
		setUserInfo({ ...userInfo, [e.target.value]: e.target.name });
	};
	return (
		<div>
			<form onSubmit={onSubmitHandler}>
				<input
					type="text"
					name="username"
					placeholder="username"
					value={userInfo.username}
					onChange={onChangeHandler}
					required
				/>
				<input
					type="password"
					name="password"
					placeholder="password"
					value={userInfo.password}
					onChange={onChangeHandler}
					required
				/>
				<button type="submit">Login</button>
			</form>
		</div>
	);
};

export default LoginPage;
