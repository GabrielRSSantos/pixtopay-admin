import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

export default function DropDown({ pagina, setPagina }) {
    const { t } = useTranslation();

    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    {t("Opções")}
                    {/* <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" /> */}
                </MenuButton>
            </div>

            <MenuItems
                transition
                className="absolute z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
                <div className="py-1">
                    <MenuItem>
                        <button
                            onClick={() => setPagina('eventos')}
                            className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                        >
                            {t("Eventos de Gatway")}
                        </button>
                    </MenuItem>
                    <MenuItem>
                        <button
                            onClick={() => setPagina('suport')}
                            className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                        >
                            {t("Suport")}
                        </button>
                    </MenuItem>
                    <MenuItem>
                        <button
                            onClick={() => setPagina('relatorio')}
                            className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                        >
                            {t("Relatórios")}
                        </button>
                    </MenuItem>
                    <MenuItem>
                        <button
                            onClick={() => setPagina('recursos')}
                            className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                        >
                            {t("Recursos adicionais")}
                        </button>
                    </MenuItem>
                    <MenuItem>
                        <button
                            onClick={() => setPagina('vantagens')}
                            className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                        >
                            {t("Vantagens")}
                        </button>
                    </MenuItem>
                </div>
            </MenuItems>
        </Menu>
    )
}