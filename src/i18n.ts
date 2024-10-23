import { i18n, Messages } from "@lingui/core"

export const locales = {
  en: "English",
  cs: "Česky",
  vi: "Tiếng Việt",
}

export const defaultLocale = "en"

// Create an object to load both PO and JSON catalogs
const catalogs: Record<string, () => Promise<Messages>> = {
  en: async () => {
    const { messages } = await import(
      // Load messages from the PO file
      // @ts-ignore
      `./file.js!=!@lingui/loader!./locales/en.po`
    )
    return messages
  },
  cs: async () => {
    const { messages } = await import(
      // Load messages from the PO file
      // @ts-ignore
      `./file.js!=!@lingui/loader!./locales/cs.po`
    )
    return messages
  },
  vi: async () => {
    // Load messages from the JSON file for Vietnamese
    const { messages } = await import(
      // Load messages from the PO file
      // @ts-ignore
      `./file.js!=!@lingui/loader!./locales/vi.po`
    )
    return messages
  }
}

/**
 * We do a dynamic import of just the catalog that we need
 * @param locale any locale string
 */
export async function dynamicActivate(locale: string) {
  const messages = await catalogs[locale as any]()
  i18n.loadAndActivate({ locale, messages })
}
