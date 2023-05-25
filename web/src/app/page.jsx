import Image from 'next/image'
import Modal from '@/components/modal'

export default function Home() {
  return (
    <main className='flex items-center justify-center h-screen'>
      <div className='relative border border-black w-[70vw] h-[80vh] m-auto'>
        <div className='border border-black w-[16vw] h-[50vh] absolute right-0 mr-14 mt-10 bg-white flex justify-center items-center'>
          <Modal
            numero={10}
          />
        </div>
        <div className='border border-black absolute right-0 mr-14 mt-10 w-[8vw] h-[8vh] flex justify-center items-center bg-white'>
          <Modal
            numero={6}
          />
        </div>
        <div className='border border-black absolute right-0 mr-56 mt-80 w-[30vw] h-[30vh] flex justify-center items-center bg-white'>
          <Modal
            numero={5}
          />
        </div>
        <div className='border border-black absolute right-0 mr-[570px] mt-96 w-[12vw] h-[23vh] flex justify-center items-center bg-white'>
          <Modal
            numero={3}
          />
        </div>
        <div className='border border-black absolute right-0 mr-[700px] mt-80 w-[10vw] h-[20vh] flex justify-center items-center bg-white'>
          <Modal
            numero={1}
          />
        </div>
        <div className='border border-black absolute right-0 mr-[650px] mt-[300px] w-[8vw] h-[10vh] flex justify-center items-center bg-white'>
          <Modal
            numero={4}
          />
        </div>
        <div className='border border-black absolute right-0 mr-[497px] mt-56 w-[8vw] h-[10vh] flex justify-center items-center bg-white'>
          <Modal
            numero={7}
          />
        </div>
        <div className='border border-black absolute right-0 mr-[497px] mt-32 w-[6vw] h-[7vh] flex justify-center items-center bg-white'>
          <Modal
            numero={9}
          />
        </div>
        <div className='border border-black absolute right-0 mr-[611px] mt-36 w-[5vw] h-[5vh] flex justify-center items-center bg-white'>
          <Modal
            numero={8}
          />
        </div>
        <div className='border border-black absolute right-0 mr-[550px] mt-12 w-[3vw] h-[7vh] flex justify-center items-center bg-white'>
          <Modal
            numero={11}
          />
        </div>
        <div className='border border-black absolute right-0 mr-[580px] mt-[400px] w-[4vw] h-[10vh] flex justify-center items-center bg-white'>
          <Modal
            numero={2}
          />
        </div>
      </div>
    </main>
  )
}
