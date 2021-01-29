/**
 * 基于fetch API的请求方法封装
 *
 * @param {string} [fetchUrl='']
 * @param {*} [resParms={}]
 * @param {string} [dataType="json"]
 * @param {boolean} [isStopFetch=false]
 * @returns
 */
async function fetchData(fetchUrl = "", resParms = {}, dataType = "json", isStopFetch = false) {
	// 请求头配置设置
	let returnData = Object.create(null);
	const stopFetch = new AbortSignal();
	let requestParms = {
		method: "GET",
		headers: {
			"Content-type": "text/plain;charset=UTF-8",
		},
		body: undefined,
		referrer: "about:client",
		referrerPolicy: "no-referrer-when-downgrade",
		mode: "cors",
		credentials: "same-origin",
		cache: "default",
		redirect: "follow",
		integrity: "",
		keepalive: false,
		signal: isStopFetch ? stopFetch.signal : undefined,
	};

	requestParms = Object.assign({}, resParms, requestParms)

	try {
		const responseData = await fetch(fetchUrl, requestParms);
		if (!responseData.ok) {
			throw new Error(responseData.statusText);
		}

		switch (dataType) {
		// 用于获取服务器返回的 JSON 数据
		case "json":
			returnData = await responseData.json();
			break;

			// 用于获取文本数据，比如 HTML 文件。
		case "text":
			returnData = await responseData.text();
			break;

			// 用于获取二进制文件
		case "blob":
			returnData = await responseData.blob();
			break;

			// 用在 Service Worker 里面，拦截用户提交的表单，修改某些数据以后，再提交给服务器
		case "formData":
			returnData = await responseData.formData();
			break;

			// 用于获取流媒体文件
		case "arrayBuffer":
			returnData = await responseData.arrayBuffer();
			break;

			// 默认返回json数据
		default:
			returnData = await responseData.json();
			break;
		}
	} catch (error) {
		console.error(error);
	}

	return returnData;
}

// demo use

// fetchData('https://api.github.com/users/ruanyf').then(res=>console.log(res)).catch((error)=>console.error(error)).finally(()=>{console.log("finally!!!")})
