// 테스트코드 파일 : sum.test.ts
import { sum } from "./sum"

it("add correctly", () => {
    expect(sum(3, 5)).toBe(8)
})