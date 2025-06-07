import React, { ReactNode, useState } from 'react';
import { View } from 'react-native';
import { hp } from '@/utils/responsiveHelper';
import { Colors } from '@/constants/Colors';

interface StepProps {
  steps: { id: string; content: ReactNode }[];
  onFinish?: () => void | null;
  validateStep?: (stepIndex: number) => boolean;
  renderFooter?: (stepIndex: number, controls: { goNext: () => void; goBack: () => void; isLastStep: boolean }) => ReactNode;
  showIndicators?: boolean;
  currentStep?: number;
  onStepChange?: (index: number) => void;
}

const StepComponent: React.FC<StepProps> = ({
  steps,
  onFinish,
  validateStep,
  renderFooter,
  showIndicators = true,
  currentStep, // controlled mode
  onStepChange, // controlled setter
}) => {
  const [internalStep, setInternalStep] = useState(0);
  const stepIndex = currentStep ?? internalStep; // use controlled or internal

  const isLastStep = stepIndex === steps.length - 1;

  const goNext = () => {
    if (validateStep && !validateStep(stepIndex)) return;
    if (isLastStep) onFinish();
    else {
      onStepChange ? onStepChange(stepIndex + 1) : setInternalStep(stepIndex + 1);
    }
  };

  const goBack = () => {
    if (stepIndex > 0) {
      onStepChange ? onStepChange(stepIndex - 1) : setInternalStep(stepIndex - 1);
    }
  };

  return (
    <View>
      {showIndicators && (
        <View style={{ flexDirection: 'row', gap: hp(0.8), paddingTop: hp(3) }}>
          {steps.map((_, index) => (
            <View key={index} style={{width: hp(5), height: hp(0.3), backgroundColor: index <= stepIndex ? Colors.indigo : Colors.gray200}}/>
          ))}
        </View>
      )}

      <View style={{ marginTop: hp(3) }}>{steps[stepIndex].content}</View>

      {renderFooter && (
        <View style={{ marginTop: hp(4) }}>
          {renderFooter(stepIndex, { goNext, goBack, isLastStep })}
        </View>
      )}
    </View>
  );
};

export default StepComponent;
