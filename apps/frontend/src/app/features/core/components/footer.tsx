import React from "react";
import Column from "./column";
import Text from "./text";
import Row from "./row";
import Image from "next/image";

export interface FooterProps {}
const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <Column className="bg-white divide-y px-8 md:px-16 flex-grow">
      <Column className="mt-10 mb-9">
        <Text className="leading-10" variant="footer-title-1">
          Atendimento
        </Text>
        <Text className="leading-10" variant="footer-link">
          Central de atendimento
        </Text>
        <Text className="leading-10" variant="footer-link">
          Políticas de privacidade
        </Text>
      </Column>
      <Row className="justify-between items-start gap-x-2">
        <Column className="mt-[10px]">
          <Text className="mb-2 leading-10" variant="footer-title-2">
            Formas de pagamento
          </Text>
          <Row className="flex-wrap gap-2">
            <Image
              height={32}
              width={48}
              src="/mastercard-logo.png"
              alt="Mastercard"
            />
            <Image height={32} width={48} src="/visa-logo.png" alt="Visa" />
            <Image
              height={32}
              width={48}
              src="/american-express-logo.png"
              alt="American Express"
            />
            <Image
              height={32}
              width={48}
              src="/diners-club-logo.png"
              alt="Diners Club"
            />
            <Image
              height={32}
              width={76}
              src="/hipercard-logo.png"
              alt="Hipercard"
            />
            <Image height={32} width={68} src="/elo-logo.png" alt="Elo" />
            <Image
              height={32}
              width={68}
              src="/bankslip-icon.png"
              alt="Boleto"
            />
            <Image height={32} width={68} src="/pix-logo.png" alt="PIX" />
          </Row>
        </Column>
        <Image
        className="mt-[34px]"
          width={194}
          height={56}
          src="/google-safe-browsing-badge.png"
          alt="Google Safe Browsing"
        />
      </Row>
    </Column>
  );
};

export default Footer;
