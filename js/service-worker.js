chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
	if (
		changeInfo.url ===
		"https://prioryca.myschoolapp.com/lms-assignment/assignment-center/student"
	) {
		chrome.tabs.update(tabId, {
			url: "https://prioryca.myschoolapp.com/app/student#studentmyday/assignment-center",
		});
	}

	if (
		tab.url.includes("prioryca.myschoolapp.com") && tab.url != "https://prioryca.myschoolapp.com/app/student#studentmyday/assignment-center" &&
		changeInfo.status === "complete"
	) {
		chrome.scripting.executeScript({
			target: { tabId: tabId },
			files: ["./js/link-modifier.js"],
		});
	}

	if (
		tab.url ===
			"https://prioryca.myschoolapp.com/app/student#studentmyday/assignment-center" &&
		changeInfo.status === "complete"
	) {
		chrome.scripting.executeScript({
			target: { tabId: tabId },
			files: ["./js/view-modifier.js"],
		});
	}
});

chrome.action.onClicked.addListener((tab) => {
	chrome.tabs.update(tab.id, {
		url: "https://prioryca.myschoolapp.com/app/student#studentmyday/assignment-center",
	});
});