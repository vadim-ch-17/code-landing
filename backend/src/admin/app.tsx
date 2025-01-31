import type { StrapiApp } from "@strapi/strapi/admin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import "../styles/index.css";
export default {
  config: {
    locales: [
      // 'ar',
      // 'fr',
      // 'cs',
      // 'de',
      // 'dk',
      // 'es',
      // 'he',
      // 'id',
      // 'it',
      // 'ja',
      // 'ko',
      // 'ms',
      // 'nl',
      // 'no',
      // 'pl',
      // 'pt-BR',
      // 'pt',
      // 'ru',
      // 'sk',
      // 'sv',
      // 'th',
      // 'tr',
      // 'uk',
      // 'vi',
      // 'zh-Hans',
      // 'zh',
    ],
  },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
  register(app: StrapiApp) {
    const indexRoute = app.router.routes.find(({ index }) => index);
    if (!indexRoute) throw new Error("unable to find index page");
    indexRoute.lazy = async () => {
      const { Homepage } = await import("./components/Homepage");
      return { Component: Homepage };
    };

    // app.router.routes.push({
    //   path: "/*/users-page",
    //   // Component: () => <>TEST</>,
    //   lazy: async () => {
    //     const { Users } = await import("./components/Users");
    //     return { Component: Users };
    //   },
    // });

    app.addMenuLink({
      to: "/admin/users-page",
      icon: () => <FontAwesomeIcon icon={faUsers} />,
      intlLabel: {
        id: "Users",
        defaultMessage: "Users",
      },
      permissions: [],
      // icon: "symbol",
      Component: function (): Promise<{ default: React.ComponentType }> {
        // throw new Error("Function not implemented.");
        return import("./components/Users").then((module) => ({
          default: module.Users,
        }));
      },
    });
  },
};
