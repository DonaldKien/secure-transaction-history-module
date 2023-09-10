import React from "react";
import MyTabs from "./src/routes/routes";
import { Layout } from "./src/styles/components/app-layout";

if (__DEV__) {
	import("./reactotron-config").then(() => console.log("Reactotron Configured"));
}

const App = (): JSX.Element => {
	return (
        
			<MyTabs />
		// <Layout>
		// 	<MyTabs />
		// </Layout>
	);
};

export default App;
