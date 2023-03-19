import React, {useState} from 'react'
import './Lottery.css'
import CountUp from 'react-countup';

function randomNumber() {
    // อันนี้ไม่ผ่านจะสุ่มไม่ได้เลข 0 เลย
    //return Math.ceil(Math.random() * 9);
    
    // Math.random() => from 0 to <1
    return Math.floor(Math.random() * 10);
}

// ถ้ามีใช้ useState ชื่อ default function ต้องขึ้นต้นด้วยตัวใหญ่เท่านั้น
export default function Lottery() {

    /*
    const [lotteryNumber1, setLotteryNumber1] = useState(1);
    const [lotteryNumber2, setLotteryNumber2] = useState(2);
    const [lotteryNumber3, setLotteryNumber3] = useState(3);

    const calLottery = () => {
        setLotteryNumber1(randomNumber());
        setLotteryNumber2(randomNumber());
        setLotteryNumber3(randomNumber());
    }*/

    // ข้างบนประกาศ useState เยอะเกิน แก้ไขโดยทำเป็น array ดังนี้
    const [lotteryNumber, setLotteryNumber] = useState([1,2,3]);

    const calLottery = () => {
        setLotteryNumber([randomNumber(), randomNumber(), randomNumber()]);
    }

    return (
        <>
        <h1 className='lottery-title'>สามตัวงวดนี้คือ... </h1>
        <div className='lottery-container'>
            {/* <div className='lottery-number'>{lotteryNumber[0]}</div> */}
            <CountUp className='lottery-number' end={lotteryNumber[0]}></CountUp>
            {/* <div className='lottery-number'>{lotteryNumber[1]}</div> */}
            <CountUp className='lottery-number' end={lotteryNumber[1]}></CountUp>
            {/* <div className='lottery-number'>{lotteryNumber[2]}</div> */}
            <CountUp className='lottery-number' end={lotteryNumber[2]}></CountUp>
        </div>
        <button 
            className='lottery-random-button'
            onClick={calLottery}
        >
            สุ่มตัวเลข
        </button>

        </>
    )
}
