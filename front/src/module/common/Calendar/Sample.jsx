import React, { useState } from "react";
import { Modal, Form, Input, Button, Typography } from "antd";
import styled from "styled-components";

const { Title } = Typography;

const StyledModal = styled(Modal)`
  &&& {
    /* Your custom styles here */
    z-index: 1500 !important; /* Adjust this value based on your needs */
  }
`;

const CuteSubmitButton = styled(Button)`
  &&& {
    background-color: #c2185b;
    border-color: #c2185b;
    color: #fff;
    border-radius: 10px; /* Rounded corners */
  }
  &:hover {
    background-color: #e91e63 !important; /* Lighter pink on hover */
    border-color: #e91e63 !important;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`;

const ModalComponent = ({
  isOpen,
  onRequestClose
}) => {
  const [form] = Form.useForm();

  const [haemoglobin, setHaemo] = useState(null);
  const [systolic, setSys] = useState(null);
  const [diastolic, setDias] = useState(null);
  const [blood_sugar, setSugar] = useState(null);
  const [thyroid, setTsh] = useState(null);
  const [fetal_movement, setFmove] = useState(null);


  const feature = [
    {
      label : 'Haemoglobin',
      value : haemoglobin ,
      name : "haemoglobin",
      ub : 20,
      lb: 0,
      unit:'g/dl',
      function : setHaemo
    }, 
    {
      label : 'Systolic',
      value : systolic,
      name : "systolic",
      ub : 400,
      lb: 0,
      unit: 'mmHg',
      function : setSys
    }, 
    {
      label : 'Diastolic',
      value : diastolic,
      name : "diastolic",
      ub : 400,
      lb: 0,
      unit : 'mmHg',
      function : setDias
    }, 
    {
      label : 'Blood Sugar',
      value : blood_sugar,
      name : "blood_sugar",
      ub : 3000,
      lb: 0,
      unit : 'mg/dl',
      function : setSugar
    } , 
    {
      label : 'TSH',
      value : thyroid,
      name : "thyroid",
      ub : 100000000,
      lb : 0,
      unit : 'mIU/L',
      function : setTsh
    }, 
    {
      label : 'Fetal Movement',
      value : fetal_movement,
      name : "fetal_movement",
      ub : 100000000,
      lb : 0,
      unit : 'No. of movements',
      function: setFmove
    }
  ]

  const onFinish = (values) => {
    console.log("Form values:", values);
    form.resetFields(); // Reset form fields after submission
  };

  return (
    <StyledModal
      visible={isOpen}  // 'visible' prop should be used instead of 'open'
      onCancel={onRequestClose}
      footer={null}
      destroyOnClose
    >
      <Title level={3} style={{ textAlign: "center", color: "#c2185b" }}>
        Input Form
      </Title>

      <Form form={form} onFinish={onFinish} layout="vertical">
        <GridContainer>
          {feature.map((fet, inputIndex) => (
            <Form.Item key={inputIndex} label={fet.label} name={fet.name}>
              <Input
                value={fet.value}
                onChange={(e) => fet.function(e.target.value)}
                style={{ borderRadius: "9px", borderColor: "#e91e63" }}
              />
            </Form.Item>
          ))}
        </GridContainer>

        <Form.Item>
          <CuteSubmitButton type="primary" htmlType="submit" block>
            Submit
          </CuteSubmitButton>
        </Form.Item>
      </Form>
    </StyledModal>
  );
};

// export default ModalComponent;