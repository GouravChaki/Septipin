import React, { useEffect, useState } from "react";
import { Modal, Form, Input, Button, Typography } from "antd";
import styled from "styled-components";
import { HashLoader } from "react-spinners";
import {useAuth} from '../../common/hooks/useAuth'


const { Title } = Typography;

const StyledModal = styled(Modal)`
  &&& {
    z-index: 1500 !important;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  .ant-modal-close-x {
    display: ${(props) => (props.isLoading ? "none" : "block")};
  }
`;

const StyledForm = styled(Form)`
  max-width: 400px;
  margin: 0 auto;
`;

const StyledInput = styled(Input)`
  border-radius: 10px;
  border-color: #e91e63;

  &:hover,
  &:focus {
    border-color: #c2185b;
  }
`;

const CuteSubmitButton = styled(Button)`
  background-color: #e91e63;
  border-color: #e91e63;
  color: #fff;
  border-radius: 10px;

  &:hover {
    background-color: #c2185b;
    border-color: #c2185b;
  }
`;
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`;

const PairContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const CenteredSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
`;

const ModalComponent = ({
  isOpen,
  onRequestClose,
  date,
  isCurrentDate,
  setIsCurrentDate,
}) => {
  const a = useAuth()
  const [form] = Form.useForm();
  const [editMode, setEditMode] = useState(false)
  const [haemoglobin, setHaemo] = useState(null);
  const [systolic, setSys] = useState(null);
  const [diastolic, setDias] = useState(null);
  const [blood_sugar, setSugar] = useState(null);
  const [thyroid, setTsh] = useState(null);
  const [fetal_movement, setFmove] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const checkData = async () => {
    //call api
    setHaemo(23);
    setSys(23);
    setDias(23);
    setSugar(23);
    setTsh(23);
    setFmove(23);
    setIsLoading(false);

    form.setFieldsValue({
      haemoglobin: 23,
      systolic: 24,
      diastolic: 25,
      blood_sugar: 26,
      thyroid: 27,
      fetal_movement: 28,
    });
  };

  useEffect(() => {
    if (isCurrentDate === "2") {
      setEditMode(true)
      setIsLoading(true);
      const fillData = async () => {
        await checkData();
      };
      fillData();
    }
  }, [isCurrentDate]);

  const features = [
    {
      label: "Haemoglobin",
      value: 100,
      name: "haemoglobin",
      ub: 20,
      lb: 0,
      unit: "g/dl",
      function: setHaemo,
    },
    {
      label: "Systolic",
      value: systolic,
      name: "systolic",
      ub: 400,
      lb: 0,
      unit: "mmHg",
      function: setSys,
    },
    {
      label: "Diastolic",
      value: diastolic,
      name: "diastolic",
      ub: 400,
      lb: 0,
      unit: "mmHg",
      function: setDias,
    },
    {
      label: "Blood Sugar",
      value: blood_sugar,
      name: "blood_sugar",
      ub: 3000,
      lb: 0,
      unit: "mg/dl",
      function: setSugar,
    },
    {
      label: "TSH",
      value: thyroid,
      name: "thyroid",
      ub: 100000000,
      lb: 0,
      unit: "mIU/L",
      function: setTsh,
    },
    {
      label: "Fetal Movement",
      value: fetal_movement,
      name: "fetal_movement",
      ub: 100000000,
      lb: 0,
      unit: "No. of movements",
      function: setFmove,
    },
  ];

  const customValidation = (rule, value, callback) => {
    const index = features.findIndex((feature) => feature.name === rule.field);
    if (
      value !== null &&
      (value < features[index].lb || value > features[index].ub)
    ) {
      callback(`Please valid data`);
    } else {
      callback();
    }
  };

  const onFinish = async (values) => {
    try {
      await form.validateFields();
      const obj = {
        patient_id : a.patientId,
        date : date,
        haemoglobin: values.haemoglobin,
        systolic : values.systoic,
        diastolic : values.diastolic,
        blood_sugar : values.blood_sugar,
        thyroid : values.thyroid,
        fetal_movement : values.fetal_movement,
        bmi : 20
      }
      console.log(obj)
      form.resetFields();
      if(isCurrentDate==="1")
      {
      //call CREATE api here
      console.log("create")
      }
      else{
      // call UPDATE api here
      console.log("update")
      }
    } catch (error) {
      console.error("Validation failed:", error);
    }
  };

  const formatDate = (date) => {
    const options = { day: "2-digit", month: "2-digit", year: "2-digit" };
    const formattedDate = date.toLocaleDateString("en-GB", options);
    return formattedDate;
  };

  const isSubmitButtonEnabled = () => {
    const isAnyFieldValid = features.some((feature) => {
      const fieldValue = form.getFieldValue(feature.name);
      return (
        fieldValue !== null &&
        fieldValue !== undefined &&
        fieldValue >= feature.lb &&
        fieldValue <= feature.ub
      );
    });

    const isAllFieldsValid = features.every((feature) => {
      const fieldValue = form.getFieldValue(feature.name);
      return (
        fieldValue === null ||
        fieldValue === undefined ||
        (fieldValue >= feature.lb && fieldValue <= feature.ub)
      );
    });

    return isAnyFieldValid && isAllFieldsValid;
  };

  const isAnyFieldFilled = () => {
    const formFields = [
      haemoglobin,
      systolic,
      diastolic,
      blood_sugar,
      thyroid,
      fetal_movement,
    ];

    // Check if at least one form field is filled
    return formFields.some(
      (field) => field !== null && field !== undefined && field !== ""
    );
  };

  const renderActionButton = () => {
    if (editMode) {
      return (
        <CuteSubmitButton
          type="primary"
          onClick={() => {
            setEditMode(false)
          }}
          block
        >
          Edit
        </CuteSubmitButton>
      );
    } else {
      return (
        <CuteSubmitButton
          type="primary"
          htmlType="submit"
          block
          disabled={!isSubmitButtonEnabled() || !isAnyFieldFilled()}
        >
          Submit
        </CuteSubmitButton>
      );
    }
  };

  return (
    <>
      <StyledModal
        open={isOpen}
        closable={!isLoading} // Enable closable only when not loading
        maskClosable={!isLoading} // Enable maskClosable only when not loading
        centered={isLoading} // Center the modal when loading
        isLoading={isLoading}
        onCancel={() => {
          form.resetFields();
          onRequestClose();
        }}
        footer={null}
        destroyOnClose
      >
        {isLoading ? (
          <CenteredSpinner>
            <HashLoader color="#c2185b" size={90} />
          </CenteredSpinner>
        ) : (
          <>
            <Title level={3} style={{ textAlign: "center", color: "#e91e63" }}>
              For {date ? formatDate(date) : ""}
            </Title>

            <StyledForm form={form} onFinish={onFinish} layout="vertical">
              <GridContainer>
                {features.map((feature, index) => (
                  <>
                    <PairContainer key={index}>
                      <Form.Item
                        label={feature.label}
                        name={feature.name}
                        rules={[
                          {
                            validator: customValidation,
                          },
                        ]}
                        validateTrigger="onChange"
                      >
                        <StyledInput
                          type="number"
                          value={feature.value}

                          onChange={(e) => {
                            if (!editMode) {
                              const newValue = parseInt(e.target.value, 10) || null;
                              feature.function(newValue);
                            }
                          }}
                          disabled={editMode}
                        />
                      </Form.Item>
                      {form.getFieldError(feature.name) &&
                        form.isFieldTouched(feature.name) && (
                          <span style={{ color: "red" }}>
                            {form.getFieldError(feature.name)}
                          </span>
                        )}
                    </PairContainer>
                  </>
                ))}
              </GridContainer>

              <Form.Item>{renderActionButton()}</Form.Item>
            </StyledForm>
          </>
        )}
      </StyledModal>
    </>
  );
};

export default ModalComponent;
