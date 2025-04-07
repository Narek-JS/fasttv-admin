import type { LoginVariables } from "~/store/auth/authTypes";
import { useLoginMutation } from "~/store/auth/authApi";
import { Button, Flex, Form, Input, Card } from "antd";
import { useTranslation } from "react-i18next";
import { Logo } from "~/components/UI/Logo";
import Title from "~/components/UI/Title";
import Cookies from "js-cookie";

const Login = () => {
  const { t } = useTranslation("login");

  const [loginMutation, { isLoading }] = useLoginMutation();

  const [form] = Form.useForm();

  const onFinish = async (values: LoginVariables) => {
    const response = await loginMutation(values);

    if (response.data?.token) {
      Cookies.set("token", response.data?.token);
    }
  };

  return (
    <div className="h-full flex items-center justify-center">
      <Card className="max-w-[448px] w-full shadow-md p-5">
        <Flex vertical gap={26}>
          <Flex gap={16} vertical align="center">
            <Logo />
            <Title align="center" size={24} fontWeight={600}>
              {t("welcome")}
            </Title>
          </Flex>
          <Form
            className="full-width"
            onFinish={onFinish}
            layout="vertical"
            form={form}
          >
            <Form.Item
              rules={[{ required: true }, { type: "email" }]}
              label={t("email_label")}
              name="email"
            >
              <Input placeholder={t("email_placeholder")} />
            </Form.Item>
            <Form.Item
              label={t("password_placeholder")}
              rules={[{ required: true }]}
              name="password"
            >
              <Input.Password placeholder={t("password_placeholder")} />
            </Form.Item>
            <Button
              loading={isLoading}
              htmlType="submit"
              className="mt-5"
              type="primary"
              size="large"
              block
            >
              {t("sign_in_button")}
            </Button>
          </Form>
        </Flex>
      </Card>
    </div>
  );
};

export default Login;
