import React from "react";
import { useTranslation } from 'react-i18next';

export default function Menu({ page }) {
    const { t } = useTranslation();

    return (
        <div>
            {page === 'eventos' && <Eventos />}
            {page === 'suport' && <Suporte />}
            {page === 'relatorio' && <Relatorio />}
            {page === 'recursos' && <Recrusos />}
            {page === 'vantagens' && <Vantagens />}
        </div>
    );
}

const Eventos = () => {
    const { t } = useTranslation();

    return (
        <div>
            <h1 className="font-bold text-3xl">{t("Eventos do Gateway")}</h1>
            <p>{t("Transações financeiras em alguns segundos a qualquer momento")}</p>
            <ul className="list-disc p-6">
                <li>{t("Saque efetuado.")}</li>
                <li>{t("Saque rejeitado.")}</li>
                <li>{t("Primeiro deposito.")}</li>
                <li>{t("Pix gerado.")}</li>
                <li>{t("Pix pago.")}</li>
                <li>{t("Pix expirado.")}</li>
            </ul>
        </div>
    )
}

const Suporte = () => {
    const { t } = useTranslation();

    return (
        <div>
            <h1 className="font-bold text-3xl">{t("Suporte")}</h1>
            <p>{t("Nosso suporte é personalizado e dedicado a nossos clientes, o que nos dá capacidade de respostas rápidas e assertivas, para as necessidades de cada atendimento. Time integral 24 horas por dia 100% dedicado e altamente preparado para te atender. Suporte 24/7 com TMA de 3 minutos.")}</p>
            <ul className="list-disc p-6">
                <li>{t("Time integral 24 horas por dia 100% dedicado e altamente preparado para te atender.")}</li>
                <li>{t("Suporte 24/7 com TMA de 3 minutos.")}</li>
            </ul>
        </div>
    )
}

const Relatorio = () => {
    const { t } = useTranslation();

    return (
        <div>
            <h1 className="font-bold text-3xl">{t("Relatórios")}</h1>
            <p>{t("O cliente consegue gerenciar e movimentar sua carteira em tempo real, podendo realizar pagamentos e movimentações direto de nosso dashboard e ter acessos há diversos relatórios. Aniversariante. Rank dos melhores clientes. Pix gerados Segmentação por idade, sexo e região. Maiores sacadores. Maiores depositantes.")}</p>
            <ul className="list-disc p-6">
                <li>{t("Aniversariante.")}</li>
                <li>{t("Rank dos melhores clientes.")}</li>
                <li>{t("Pix gerados")}</li>
                <li>{t("Segmentação por idade, sexo e região.")}</li>
                <li>{t("Maiores sacadores.")}</li>
                <li>{t("Maiores depositantes.")}</li>
            </ul>
        </div>
    )
}

const Recrusos = () => {
    const { t } = useTranslation();

    return (
        <div>
            <h1 className="font-bold text-3xl">{t("Recursos adicionais")}</h1>
            <p>{t("Dentre diversas facilidades que nosso sistema oferece, a integração de Host to Host é a primeira experienciada por quem usufrui de nossos serviços. Geolocalização dos clientes. Exportação de extrato financeiro via OFX. Geração e envio de invoice direto do dashboard.")}</p>
            <ul className="list-disc p-6">
                <li>{t("Geolocalização dos clientes.")}</li>
                <li>{t("Exportação de extrato financeiro via OFX.")}</li>
                <li>{t("Geração e envio de invoice direto do dashboard.")}</li>
            </ul>
        </div>
    )
}

const Vantagens = () => {
    const { t } = useTranslation();

    return (
        <div>
            <h1 className="font-bold text-3xl">{t("Vantagens")}</h1>
            <p>{t("A principal vantagem é a implementação super fácil, através da nossa API de integração")}</p>
            <ul className="list-disc p-6">
                <li>{t("Segurança rigorosa.")}</li>
                <li>{t("Checkout transparente.")}</li>
                <li>{t("Compliance.")}</li>
                <li>{t("Câmbio.")}</li>
                <li>{t("Suporte.")}</li>
                <li>Pix.</li>
            </ul>
        </div>
    )
}