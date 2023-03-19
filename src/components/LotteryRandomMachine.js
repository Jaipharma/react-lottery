import React, {useState} from 'react'
import CountUp from 'react-countup';
import './Lottery.css'

function randomNumber() {
    // อันนี้ไม่ผ่านจะสุ่มไม่ได้เลข 0 เลย
    //return Math.ceil(Math.random() * 9);
    
    // Math.random() => from 0 to <1
    return Math.floor(Math.random() * 10);
}

export default function LotteryRandomMachine({title, size}) {
    // const [lotteryNumber, setLotteryNumber] = useState([1,2,3]);
    // สร้าง array ตามขนาด size ของ lottery
    const lotteryArray = Array(size).fill(0);  // [0, 0, 0]
    const [lotteryNumber, setLotteryNumber] = useState(lotteryArray);

    const calLottery = () => {
        // code เดิม
        //setLotteryNumber([randomNumber(), randomNumber(), randomNumber()]);
        const randomArray = lotteryNumber.map(() => randomNumber()); // [1, 2, 3]
        setLotteryNumber(randomArray);
    }

    return (
        <>
            <h1 className='lottery-title'>{title}</h1>
            <div className='lottery-container'>
                {
                    lotteryNumber.map(item => {
                        return <CountUp className='lottery-number' end={item}></CountUp>
                    })
                }
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
