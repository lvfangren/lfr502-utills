// 简单Promise用法
const proposeToMissHan = (isOK) => new Promise((resolve, reject) => {
	setTimeout(() => {
		if (isOK) {
			resolve("ok");
		} else {
			reject("no");
		}
	}, 20);
});
// proposeToMissHan(false).then(res => { console.log(res) } ).then(console.log(123)).catch(err => { console.log(err) })
