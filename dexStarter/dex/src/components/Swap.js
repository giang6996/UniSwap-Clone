import React, { useState, useEffect } from "react";
import { Input, Radio, message, Modal, Popover } from "antd";
import { ArrowDownIcon, SettingsIcon, UpDownIcon } from "@chakra-ui/icons";
import tokenArr from "../tokenList.json";

function Swap() {
  const [slippage, setSlippage] = useState(0.5);
  const [tokenOneAmount, setTokenOneAmount] = useState(null);
  const [tokenTwoAmount, setTokenTwoAmount] = useState(null);

  const [tokenOne, setTokenOne] = useState(tokenArr[0]);
  const [tokenTwo, setTokenTwo] = useState(tokenArr[1]);

  const [isOpen, setModelOpen] = useState(false);

  const [changeToken, setNewToken] = useState(1);

  function slippageChangeValue(x) {
    setSlippage(x.target.value);
  }

  function changeTokenAmount(x) {
    setTokenOneAmount(x.target.value);
  }

  function SwitchTokens() {
    const first = tokenOne;
    const second = tokenTwo;

    setTokenOne(second);
    setTokenTwo(first);
  }

  function openModal() {
    setModelOpen(!isOpen);
  }

  function modifyToken(index){
    if(changeToken === 1)
    {
      setTokenOne(tokenArr[index])
    }
    else{
      setTokenTwo(tokenArr[index])
    }
    setModelOpen(false);
  }

  // function setNewToken(x){

  // }

  const settingContent = (
    <>
      <div> Slippage tolerrence </div>
      <div>
        <Radio.Group value={slippage} onChange={slippageChangeValue}>
          <Radio.Button value={0.5}>0.5%</Radio.Button>
          <Radio.Button value={2.5}>2.5%</Radio.Button>
          <Radio.Button value={5}>5.0%</Radio.Button>
        </Radio.Group>
      </div>
    </>
  );

  return (
    <>
      <Modal
        open={isOpen}
        footer={null}
        onCancel={() => setModelOpen(false)}
        title="Select a token"
      >

        <div className="modelContent">
          {/* e stand for the current value that is currently map, i stand for index
          array.map(function(currentValue, index, arr), thisValue) */}
          {tokenArr.map((e, i) => {
            return (
              <div
                className="tokenChoice"
                key={i}
                onClick = {() => modifyToken(i)}  >

                <img src={e.img} alt={e.ticker} className="tokenLogo" />
                <div className="tokenChoiceNames">
                  <div className="tokenName">{e.name}</div>
                  <div className="tokenTicker">{e.ticker}</div>
                </div>
              </div>
            );
          })}
        </div>
      </Modal>

      <div className="content">
        <div className="tradeBox">
          <div className="tradeBoxHeader">
            <h3>Swap</h3>
            <Popover
              title="Setting"
              content={settingContent}
              trigger="click"
              placement="bottomRight"
            >
              <SettingsIcon className="cog" />
            </Popover>
          </div>
          <div className="inputs">
            <Input
              placeholder="0.00"
              value={tokenOneAmount}
              onChange={changeTokenAmount}
            />
            <div className="asset assetOne" onClick={() => openModal(1)}>
              <img
                src={tokenOne.img}
                alt="assetOneLogo"
                className="assetLogo"
              />
              {tokenOne.ticker}
              <ArrowDownIcon />
            </div>

            <div className="switchButton" onClick={SwitchTokens}>
              <UpDownIcon className="switchArrow" />
            </div>

            <Input placeholder="0.00" value={tokenTwoAmount} disabled={true} />
            <div className="asset assetTwo" onClick={() => openModal(2)}>
              <img
                src={tokenTwo.img}
                alt="assetTwoLogo"
                className="assetLogo"
              />
              {tokenTwo.ticker}
              <ArrowDownIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Swap;
