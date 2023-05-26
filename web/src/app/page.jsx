"use client";
import { useState, useEffect } from 'react'

import Modal from '@/components/modal'

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/alocacao');
        const jsonData = await response.json();
        setData(jsonData);
      } catch(error) {
        console.log('Error: ', error)
      }
    }
    fetchData();
  }, [])

  return (
    <main className='flex items-center justify-center h-screen'>
      <div className='relative border border-black w-[70vw] h-[80vh] m-auto'>
        <div className='border border-black w-[16vw] h-[50vh] absolute right-0 mr-14 mt-10 bg-white flex justify-center items-center'>
          <Modal
            area={10}
            dados={data}
          />
        </div>
        <div className='border border-black absolute right-0 mr-14 mt-10 w-[8vw] h-[8vh] flex justify-center items-center bg-white'>
          <Modal
            area={6}
            dados={data}
          />
        </div>
        <div className='border border-black absolute right-0 mr-56 mt-80 w-[30vw] h-[30vh] flex justify-center items-center bg-white'>
          <Modal
            area={5}
            dados={data}
          />
        </div>
        <div className='border border-black absolute right-0 mr-[570px] mt-96 w-[12vw] h-[23vh] flex justify-center items-center bg-white'>
          <Modal
            area={3}
            dados={data}
          />
        </div>
        <div className='border border-black absolute right-0 mr-[700px] mt-80 w-[10vw] h-[20vh] flex justify-center items-center bg-white'>
          <Modal
            area={1}
            dados={data}
          />
        </div>
        <div className='border border-black absolute right-0 mr-[650px] mt-[300px] w-[8vw] h-[10vh] flex justify-center items-center bg-white'>
          <Modal
            area={4}
            dados={data}
          />
        </div>
        <div className='border border-black absolute right-0 mr-[497px] mt-56 w-[8vw] h-[10vh] flex justify-center items-center bg-white'>
          <Modal
            area={7}
            dados={data}
          />
        </div>
        <div className='border border-black absolute right-0 mr-[497px] mt-32 w-[6vw] h-[7vh] flex justify-center items-center bg-white'>
          <Modal
            area={9}
            dados={data}
          />
        </div>
        <div className='border border-black absolute right-0 mr-[611px] mt-36 w-[5vw] h-[5vh] flex justify-center items-center bg-white'>
          <Modal
            area={8}
            dados={data}
          />
        </div>
        <div className='border border-black absolute right-0 mr-[550px] mt-12 w-[3vw] h-[7vh] flex justify-center items-center bg-white'>
          <Modal
            area={11}
            dados={data}
          />
        </div>
        <div className='border border-black absolute right-0 mr-[580px] mt-[400px] w-[4vw] h-[10vh] flex justify-center items-center bg-white'>
          <Modal
            area={2}
            dados={data}
          />
        </div>
      </div>
    </main>
  )
}
