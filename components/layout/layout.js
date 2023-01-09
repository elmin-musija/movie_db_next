const Layout = (props) => {
	return (
		<div className=" bg-gradient-to-r bg-sky-900 bg-slate-800 px-8 min-h-screen">
			{props.children}
		</div>
	);
};

export default Layout;
