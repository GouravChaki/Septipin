import React, { useEffect, useState } from "react";
import { Modal, Form, Input, Button, Typography } from "antd";
import styled from "styled-components";
import { HashLoader } from "react-spinners";
import { useAuth } from "../../common/hooks/useAuth";
import axios from "axios";
import { showToastMessage } from "../../../utils";
import { EmergencyToastMessage, checkCPD } from "../../components/StatisticalTracker/Utils/Utils";
import { useNavigate } from "react-router-dom/dist/umd/react-router-dom.development";

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
const backendUrl = "http://localhost:3000";

const ModalComponent = ({
  isOpen,
  onRequestClose,
  date,
  isCurrentDate,
  setIsCurrentDate,
  patientId,
}) => {
  const navigate = useNavigate()
  const [form] = Form.useForm();
  const [editMode, setEditMode] = useState(false);
  const [haemoglobin, setHaemo] = useState(null);
  const [systolic, setSys] = useState(null);
  const [diastolic, setDias] = useState(null);
  const [blood_sugar, setSugar] = useState(null);
  const [thyroid, setTsh] = useState(null);
  const [fetal_movement, setFmove] = useState(null);
  const [medicalData, setMedicalData] = useState(null);
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
      haemoglobin: 12,
      systolic: 120,
      diastolic: 90,
      blood_sugar: 126,
      thyroid: 4,
      fetal_movement: 10,
    });
  };

  useEffect(() => {
    if (isCurrentDate === "2") {
      setEditMode(true);
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
      setIsLoading(true);
      const originalDate = new Date(date);
      const formattedDate = originalDate.toISOString();

      await form.validateFields();
      const obj = {
        patient_id: patientId,
        date: formattedDate,
        haemoglobin: values.haemoglobin,
        systolic: values.systolic,
        diastolic: values.diastolic,
        blood_sugar: values.blood_sugar,
        thyroid: values.thyroid,
        fetal_movement: values.fetal_movement,
        bmi: 20,
      };
      form.resetFields();
      if (isCurrentDate === "1") {
        const apiEndpoint = `${backendUrl}/disease_create`;
        const x = await axios.post(apiEndpoint, obj);
        const haemoglobinValues = x.data.data.disease.map(
          (entry) => entry?.haemoglobin
        );
        const systolicValues = x.data.data.disease.map(
          (entry) => entry?.systolic
        );
        const diastolicValues = x.data.data.disease.map(
          (entry) => entry?.diastolic
        );
        const bloodSugarValues = x.data.data.disease.map(
          (entry) => entry?.blood_sugar
        );
        const thyroidValues = x.data.data.disease.map((entry) => entry?.thyroid);
        const fetalMovementValues = x.data.data.disease.map(
          (entry) => entry?.fetal_movement
        );
        let hae = await checkCPD(formattedDate,haemoglobinValues, haemoglobin, "hemoglobin");
        let sys = await checkCPD(formattedDate,systolicValues, systolic, "systolic");
        let dias = await checkCPD(formattedDate,diastolicValues, diastolic, "diastolic");
        let sugar = await checkCPD(formattedDate,bloodSugarValues, blood_sugar, "sugar");
        let thy = await checkCPD(formattedDate,thyroidValues, thyroid, "thyroid");
        console.log(hae,sys,dias,sugar,thy)
        const arr = [hae.data?.message , sys.data?.message , dias.data?.message , sugar.data?.message, thy.data?.message]
        const nm = ["Haemoglobin","Systolic Blood Pressure","Diastolic Blood Pressure","Blood Sugar", "Thyroid"]
        let resultMessages = "";

        arr.forEach((item, index) => {
          if ( item && item.result >= 2) {
            const anomalies = [];
            // Check for specific conditions and add to anomalies array
            if (item.zScore >= 2) {
              anomalies.push("High zScore");
            }
            if (item.suddenSpike >= 2) {
              anomalies.push("Sudden Spike");
            }
            if (item.thresoldValue >= 2) {
              anomalies.push("Threshold Exceeded");
            }
      
            // Generate the message
            const message =
              `${nm[index]}: We have detected certain changes in your vitals. ` +
              `Anomalies found: ${anomalies.join(', ')}`;
      
            resultMessages = resultMessages + "                  " + message;
          }
        });
        EmergencyToastMessage('warn',resultMessages)
        setMedicalData(x);
        onRequestClose()
        if (x.data.data.success) {
          showToastMessage(
            "success",
            "Medical Statistics Created Successfully",
            3000,
            4
          );
        }
      } else {
        const apiEndpoint = `${backendUrl}/disease_update`;
        const x = await axios.post(apiEndpoint, obj);

        const haemoglobinValues = x.data.data.disease.map(
          (entry) => entry?.haemoglobin
        );
        const systolicValues = x.data.data.disease.map(
          (entry) => entry?.systolic
        );
        const diastolicValues = x.data.data.disease.map(
          (entry) => entry?.diastolic
        );
        const bloodSugarValues = x.data.data.disease.map(
          (entry) => entry?.blood_sugar
        );
        const thyroidValues = x.data.data.disease.map((entry) => entry?.thyroid);
        const fetalMovementValues = x.data.data.disease.map(
          (entry) => entry?.fetal_movement
        );
        let hae = await checkCPD(haemoglobinValues, haemoglobin, "hemoglobin");
        let sys = await checkCPD(systolicValues, systolic, "systolic");
        let dias = await checkCPD(diastolicValues, diastolic, "diastolic");
        let sugar = await checkCPD(bloodSugarValues, blood_sugar, "sugar");
        let thy = await checkCPD(thyroidValues, thyroid, "thyroid");
        const arr = [hae.data?.message , sys.data?.message , dias.data?.message , sugar.data?.message, thy.data?.message]
        const nm = ["Haemoglobin","Systolic Blood Pressure","Diastolic Blood Pressure","Blood Sugar", "Thyroid"]
        let resultMessages = "";

        arr.forEach((item, index) => {
          if ( item && item.result >= 2) {
            const anomalies = [];
            // Check for specific conditions and add to anomalies array
            if (item.zScore >= 2) {
              anomalies.push("High zScore");
            }
            if (item.suddenSpike >= 2) {
              anomalies.push("Sudden Spike");
            }
            if (item.thresoldValue >= 2) {
              anomalies.push("Threshold Exceeded");
            }
      
            // Generate the message
            const message =
              `${nm[index]}: We have detected certain changes in your vitals. ` +
              `Anomalies found: ${anomalies.join(', ')}`;
      
            resultMessages = resultMessages + "                  " + message;
          }
        });
        EmergencyToastMessage('warn',resultMessages)
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
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
            setEditMode(false);
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
                              const newValue =
                                parseInt(e.target.value, 10) || null;
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
