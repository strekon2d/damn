import styled from "styled-components";
import { ReactNode } from "react";
import { useTranslation } from "@pancakeswap/localization";
import { AtomBox } from "@pancakeswap/ui";
//  should be ok to import type from sdk
import type { FeeAmount } from "@pancakeswap/v3-sdk";

import { ModalContainer, ModalCloseButton, ModalBody, ModalActions, ModalProps } from "../../../Modal";
import { Link } from "../../../../components/Link";
import { Text } from "../../../../components/Text";
import { Button } from "../../../../components/Button";
import Flex from "../../../../components/Box/Flex";
import Tags from "../Tags";
import { Tag } from "../../../../components/Tag";
import { AutoRow, RowBetween } from "../../../../components";

const { BoostedTag, FarmAuctionTag, V3FeeTag } = Tags;

const StyledLink = styled(Link)`
  width: 100%;
  &:hover {
    text-decoration: initial;
  }
`;

const ScrollableContainer = styled(Flex)`
  flex-direction: column;
  height: auto;
  max-height: 60vh;
`;

interface ViewAllFarmModalProps extends ModalProps {
  isReady: boolean;
  lpSymbol: string;
  liquidityUrlPathParts: string;
  tokenPairImage: ReactNode;
  boosted?: boolean;
  feeAmount?: FeeAmount;
  isCommunityFarm?: boolean;
  multiplier: string;
  children: ReactNode;
}

const ViewAllFarmModal: React.FunctionComponent<React.PropsWithChildren<ViewAllFarmModalProps>> = ({
  isReady,
  lpSymbol,
  liquidityUrlPathParts,
  tokenPairImage,
  boosted,
  feeAmount,
  isCommunityFarm,
  multiplier,
  children,
  onDismiss,
}) => {
  const { t } = useTranslation();

  return (
    <ModalContainer $minWidth="300px" maxHeight="90vh">
      <AtomBox bg="gradientBubblegum" py="24px" maxWidth="screenMd">
        <RowBetween flexWrap="nowrap" px="24px">
          <Flex alignItems="center" width="100%">
            {tokenPairImage}
            <Text bold m="0 8px">
              {lpSymbol.split(" ")[0]}
            </Text>
            <AutoRow gap="4px" justifyContent="flex-start" flex={1}>
              {isReady && multiplier && (
                <Tag mr="4px" variant="secondary">
                  {multiplier}
                </Tag>
              )}
              {isReady && feeAmount && <V3FeeTag mr="4px" feeAmount={feeAmount} />}
              {isReady && boosted && <BoostedTag mr="4px" />}
              {isReady && isCommunityFarm && <FarmAuctionTag />}
            </AutoRow>
          </Flex>
          <ModalCloseButton onDismiss={onDismiss} />
        </RowBetween>
        <ModalBody mt="16px">
          <ScrollableContainer px="24px">{children}</ScrollableContainer>
        </ModalBody>
        <AtomBox px="24px">
          <ModalActions>
            <StyledLink external href={liquidityUrlPathParts}>
              <Button width="100%" variant="secondary">
                {t("Add Liquidity")}
              </Button>
            </StyledLink>
          </ModalActions>
        </AtomBox>
      </AtomBox>
    </ModalContainer>
  );
};

export default ViewAllFarmModal;
