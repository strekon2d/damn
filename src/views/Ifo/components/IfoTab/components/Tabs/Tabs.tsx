import React, { ReactElement, useState } from "react"
import styled from 'styled-components';
import TabTitle from "./TabTitle"

type Props = {
  children: ReactElement[]
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 39px;
`

const Tab = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  /* Light/Tertiary */
  background: #EFF4F5;
  /* Field/Inset */
  box-shadow: inset 0px 2px 2px -1px rgba(0, 0, 0, 0.2);
  border-radius: 16px;
`
const Tabs: React.FC<Props> = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(0)

  return (
    <>
      <Wrapper>
        <Tab>
          {children.map((item, index) => (
            <TabTitle
              key={`${item}`}
              title={item.props.title}
              index={index}
              setSelectedTab={setSelectedTab}
              active={selectedTab === index}
            />
          ))}
        </Tab>
      </Wrapper>
      {children[selectedTab]}
    </>
  )
}

export default Tabs;
