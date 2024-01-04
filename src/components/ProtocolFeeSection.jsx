import React from 'react'
import firsticon from "../assets/firsticon.svg"
import { BiMovie } from "react-icons/bi";
import { FaShuffle } from "react-icons/fa6";
import {motion} from 'framer-motion';

const ProtocolFeeSection = () => {
  return (
    <div className='pfContainer'>

        <div className="aboutContainer_Header">
            <div className="aboutContainer_Header_whiteleft"><></></div>
            <h5>Protocol Fees</h5>
            <div className="aboutContainer_Header_whiteright"><></></div>
        </div>

        <div className='pfContainer_title' >Protocol Fee Structure</div>

        <div className='pfContainer_body' >

          <motion.div className='pfContainer_body_part'
          
            initial={{ scale: 0,}}
            whileInView={{ scale: 1, }}
            transition={{ duration: 0.4 }}
          
          >  

            <div className='pfContainer_body_part_top' >
              <BiMovie className='pfContainer_body_part_top_ic' />
            </div>

            <div className='pfContainer_body_part_title' >Bucket Creation Fee:</div>

            <div className='pfContainer_body_part_body' >
              Users engaging in the creation of 
              silos within the protocol will incur a fee. 
              <br/>
              <br/>
              This fee is intended to support the 
              ongoing development, maintenance, 
              and improvement of the protocol.
            </div>

            <button>
              Learn More
            </button>

          </motion.div>

          <motion.div className='pfContainer_body_part'
          
            initial={{ scale: 0,}}
            whileInView={{ scale: 1, }}
            transition={{ duration: 0.4 }}

          >  

            <div className='pfContainer_body_part_top' >
              <FaShuffle className='pfContainer_body_part_top_ic' />
            </div>

            <div className='pfContainer_body_part_title' >Shuffler Creation Fee:</div>

            <div className='pfContainer_body_part_body' >
              Users initiating the creation of shuffler within the system will be subject to a fee. 
              This fee contributes to the sustainability and enhancement of the protocol's functionality.
            </div>

            <button>
              Learn More
            </button>

          </motion.div>

          <motion.div className='pfContainer_body_part'
          
            initial={{ scale: 0,}}
            whileInView={{ scale: 1, }}
            transition={{ duration: 0.4 }}
          
          >  

            <div className='pfContainer_body_part_top' >
              <FaShuffle className='pfContainer_body_part_top_ic' />
            </div>

            <div className='pfContainer_body_part_title' >Deposit and <br/> Withdrawal Fees:</div>

            <div className='pfContainer_body_part_body' >
              Transactions involving deposits and withdrawals within the protocol will be subject to fees. 
              These fees are implemented to ensure the integrity and efficiency of the system, supporting its overall stability and continuous development.
            </div>

            <button>
              Learn More
            </button>

          </motion.div>

        </div>

    </div>
  )
}

export default ProtocolFeeSection