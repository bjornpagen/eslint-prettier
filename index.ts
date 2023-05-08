// test-stress.ts
class MyClass {
	private field1: string
	protected field2: number
	public field3: boolean
	readonly field4: Array<string>

	constructor(param1: string | null, param2?: number) {
		this.field1 = param1 || "default"
		this.field2 = param2 || 0
		this.field3 = true
		this.field4 = []
	}

	private method1() {
		const arr = [1, 2, 3]
		for (const i in arr) {
			console.log(i)
		}
	}

	public method2() {
		let x
		if (this.field1 === "test") {
			x = 5
		} else {
			return 10
		}
		return x
	}

	async doSomething() {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve("Done")
			}, 1000)
		})
	}
}

enum MyEnum {
	Value1,
	Value2,
	Value3
}

interface MyEmptyInterface { }

function doWhileExample(): number {
	let i = 0
	do {
		i++
	} while (i < 5)
	return i
}

function func(param1: number, param2?: number): number {
	return param1 + (param2 ?? 0)
}

const arrowFunc = (param1: number, param2?: number): number => {
	return param1 + (param2 ?? 0)
}

const result = func(5) ? 10 : 20
