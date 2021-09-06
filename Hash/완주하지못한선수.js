// 정리되지 않은 코드
function solution(participant, completion) {
    let answer = {};
    for (let i = 0; i < participant.length; i++) {
        if (answer[participant[i]] !== undefined) answer[participant[i]] += 1
        else {answer[participant[i]] = 1}
    }

    for (let i = 0; i < completion.length; i++) {
        answer[completion[i]] -= 1
    }
    let keys = Object.keys(answer)
    let values = Object.values(answer)

    for (let i = 0; i < keys.length; i++) {
        if(values[i] > 0) {
            answer = keys[i]
        }
    }

    return answer;
}
