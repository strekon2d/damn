import { useEffect, Fragment, useState } from "react";
import styled from "styled-components";
import { useTranslation } from "@pancakeswap/localization";
import { Flex } from "../../components/Box";
import DateStep from "../../components/DateStep/DateStep";

const Spacer = styled.div<{ isPastSpacer?: boolean }>`
  width: 100%;
  height: 2px;
  border-radius: 4px;
  margin: 10px 4px auto 4px;
  background-color: ${({ isPastSpacer, theme }) =>
    isPastSpacer ? theme.colors.textSubtle : theme.colors.textDisabled};
`;

interface IfoProgressStepperProps {
  vestingStartTime: number;
  cliff: number;
  duration: number;
  getNow: () => number;
}

const IfoProgressStepper: React.FC<React.PropsWithChildren<IfoProgressStepperProps>> = ({
  vestingStartTime,
  cliff,
  duration,
  getNow,
}) => {
  const {
    t,
    currentLanguage: { locale },
  } = useTranslation();
  const [steps, setSteps] = useState<{ key: string; text: string; timeStamp: number }[]>([]);
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  useEffect(() => {
    const currentTimeStamp = getNow();
    const timeSalesEnded = vestingStartTime * 1000;
    const timeCliff = vestingStartTime === 0 ? currentTimeStamp : (vestingStartTime + cliff) * 1000;
    const timeVestingEnd = vestingStartTime === 0 ? currentTimeStamp : (vestingStartTime + duration) * 1000;

    let index = 0;
    if (vestingStartTime > 0) {
      if (currentTimeStamp >= timeVestingEnd) {
        index = 2;
      } else if (timeVestingEnd >= currentTimeStamp && timeCliff <= currentTimeStamp) {
        index = 1;
      } else {
        index = 0;
      }
    }

    setActiveStepIndex(index);
    setSteps([
      { key: "endSale", text: t("Sales ended"), timeStamp: timeSalesEnded },
      {
        key: cliff === 0 ? "startVesting" : "cliff",
        text: cliff === 0 ? t("Vesting Start") : t("Cliff"),
        timeStamp: timeCliff,
      },
      { key: "endVesting", text: t("Vesting end"), timeStamp: timeVestingEnd },
    ]);
  }, [t, cliff, duration, vestingStartTime, getNow]);

  return (
    <Flex>
      {steps.map((step, index: number) => {
        const isPastSpacer = index < activeStepIndex;
        const dateText =
          step.timeStamp === 0
            ? t("Now")
            : new Date(step.timeStamp).toLocaleString(locale, {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
              });

        return (
          <Fragment key={step.key}>
            <DateStep index={index} stepText={step.text} dateText={dateText} activeStepIndex={activeStepIndex} />
            {index + 1 < steps.length && <Spacer isPastSpacer={isPastSpacer} />}
          </Fragment>
        );
      })}
    </Flex>
  );
};

export default IfoProgressStepper;
