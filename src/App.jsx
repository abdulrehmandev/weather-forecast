import { useState } from "react";
import SearchForm from "./components/Search";

function App() {
	function _onSearch(searchInput) {
		console.log(searchInput);
	}

	return (
		<div className="App">
			<SearchForm onSearch={_onSearch} />
		</div>
	);
}

export default App;
