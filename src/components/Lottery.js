import React from 'react'
import LotteryRandomMachine from './LotteryRandomMachine';

export default function Lottery() {
    return (
        <>
            <LotteryRandomMachine title="สามตัวงวดนี้คือ..." size={3} />
            <LotteryRandomMachine title="สองตัวงวดนี้คือ..." size={2} />
        </>
    )
}
