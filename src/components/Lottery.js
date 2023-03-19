import React, {useState} from 'react'
import './Lottery.css'
import CountUp from 'react-countup';

function randomNumber() {
    // อันนี้ไม่ผ่านจะสุ่มไม่ได้เลข 0 เลย
    //return Math.ceil(Math.random() * 9);
    
    // Math.random() => from 0 to <1
    return Math.floor(Math.random() * 10);
}

function LotteryRandomMachine({title, size}) {

    // const [lotteryNumber, setLotteryNumber] = useState([1,2,3]);
    // สร้าง array ตามขนาด size ของ lottery
    const lotteryArray = Array(size).fill(0);  // [0, 0, 0]
    const [lotteryNumber, setLotteryNumber] = useState(lotteryArray);

    const calLottery = () => {
        // code เดิม
        //setLotteryNumber([randomNumber(), randomNumber(), randomNumber()]);

        const randomArray = lotteryNumber.map((x) => randomNumber()); // [1, 2, 3]
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

            {/* code เดิม
            <CountUp className='lottery-number' end={lotteryNumber[0]}></CountUp>
            <CountUp className='lottery-number' end={lotteryNumber[1]}></CountUp>
            <CountUp className='lottery-number' end={lotteryNumber[2]}></CountUp> 
            */}

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

// ถ้ามีใช้ useState ชื่อ default function ต้องขึ้นต้นด้วยตัวใหญ่เท่านั้น
export default function Lottery() {

    return (
        <>
            <LotteryRandomMachine title="สามตัวงวดนี้คือ..." size={3} />
            <LotteryRandomMachine title="สองตัวงวดนี้คือ..." size={2} />
        </>
    )
}
