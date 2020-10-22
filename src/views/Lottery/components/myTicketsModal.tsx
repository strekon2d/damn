import React from 'react'
import Button from '../../../components/Button'
import Modal, {ModalProps} from '../../../components/Modal'
import ModalActions from '../../../components/ModalActions'
import ModalTitle from '../../../components/ModalTitle'
import styled from "styled-components";
import ModalContent from "../../../components/ModalContent";


interface MyTicketsModalProps extends ModalProps {
  myTicketNumbers: Array<any>
}

const MyTicketsModal: React.FC<MyTicketsModalProps> = ({ myTicketNumbers, onDismiss}) => {

    const listItems = myTicketNumbers.map((number, index) =>
        <p key={index}>{number.toString()}</p>
    );

    return (
        <Modal>
            <ModalTitle text={`My Tickets`}/>
            <ModalContent>
                <div>
                    <TicketsList>
                        <h2>{listItems}</h2>
                    </TicketsList>
                </div>
            </ModalContent>
            <ModalActions>
                <Button text="Close" variant="secondary" onClick={onDismiss}/>
            </ModalActions>
        </Modal>
    )
}


const TicketsList = styled.div`
  text-align: center;
  overflow-y: auto;
  max-height: 400px;
  color: ${(props) => props.theme.colors.primary};
`

export default MyTicketsModal
