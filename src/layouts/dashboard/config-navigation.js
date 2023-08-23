import { useMemo } from 'react';
// routes
import { paths } from 'src/routes/paths';
// locales
import { useLocales } from 'src/locales';
// components
import Label from 'src/components/label';
import Iconify from 'src/components/iconify';
import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
  // OR
  // <Iconify icon="fluent:mail-24-filled" />
  // https://icon-sets.iconify.design/solar/
  // https://www.streamlinehq.com/icons
);

const ICONS = {
  job: icon('ic_job'),
  blog: icon('ic_blog'),
  chat: icon('ic_chat'),
  mail: icon('ic_mail'),
  user: icon('ic_user'),
  file: icon('ic_file'),
  lock: icon('ic_lock'),
  tour: icon('ic_tour'),
  order: icon('ic_order'),
  label: icon('ic_label'),
  blank: icon('ic_blank'),
  kanban: icon('ic_kanban'),
  folder: icon('ic_folder'),
  banking: icon('ic_banking'),
  booking: icon('ic_booking'),
  invoice: icon('ic_invoice'),
  product: icon('ic_product'),
  calendar: icon('ic_calendar'),
  disabled: icon('ic_disabled'),
  external: icon('ic_external'),
  menuItem: icon('ic_menu_item'),
  ecommerce: icon('ic_ecommerce'),
  analytics: icon('ic_analytics'),
  dashboard: icon('ic_dashboard'),
};

// ----------------------------------------------------------------------

export function useNavData() {
  const { t } = useLocales();

  const data = useMemo(
    () => [
      // OVERVIEW
      // ----------------------------------------------------------------------
      {
        subheader: t('Menu'),
        items: [
          {
            title: t('Prehľad'),
            path: paths.dashboard.root,
            icon: ICONS.dashboard,
          },
          {
            title: t('Infeenity game'),
            path: paths.dashboard.general.banking,
            icon: ICONS.banking,
          },
          {
            title: t('Infeenity way'),
            path: paths.dashboard.tour.root,
            icon: ICONS.tour,
            children: [
              { title: t('Prehľad'), path: paths.dashboard.tour.demo.details },
              { title: t('Benefity'), path: paths.dashboard.tour.demo.edit },
              { title: t('Prihláška'), path: paths.dashboard.tour.new },
            ],
          },          {
            title: t('Moji klienti'),
            path: paths.dashboard.job.root,
            icon: ICONS.job,
            children: [
              { title: t('Prehľad'), path: paths.dashboard.job.root },
              { title: t('Nový'), path: paths.dashboard.job.new },
              { title: t('Rozpracované'), path: paths.dashboard.job.demo.details },
              { title: t('Uzatvorené'), path: paths.dashboard.job.demo.edit },
            ],
          },
                              {
            title: t('Kalendár'),
            path: paths.dashboard.calendar,
            icon: ICONS.calendar,
          },
          {
            title: t('Galéria'),
            path: paths.dashboard.post.root,
            icon: ICONS.blog,
          },
          {
            title: t('Produkty'),
            path: paths.dashboard.general.file,
            icon: ICONS.file,
          },
          {
            title: t('Cheety'),
            path: paths.dashboard.chat,
            icon: ICONS.chat,
          },
         {
            title: t('Mail'),
            path: paths.dashboard.mail,
            icon: ICONS.mail,
          },
                    {
            title: t('Zoznam Benefitov'),
            path: paths.dashboard.general.booking,
            icon: ICONS.booking,
          },
        ],
      },

      // Nastavenia
      // ----------------------------------------------------------------------
      {
        subheader: t('Nastavenia'),
        items: [
          // USER
          {
            title: t('Uživateľ'),
            path: paths.dashboard.user.root,
            icon: ICONS.user,
            children: [
              { title: t('Profil'), path: paths.dashboard.user.account },
              { title: t('Úpravy'), path: paths.dashboard.user.demo.edit },

            ],
          },

          {
            title: t('Ciele'),
            path: paths.dashboard.invoice.root,
            icon: ICONS.invoice,
            children: [
              { title: t('Prehľad'), path: paths.dashboard.invoice.root },
              {
                title: t('Mesačné'),
                path: paths.dashboard.invoice.demo.details,
              },
              { title: t('Ročné'), path: paths.dashboard.invoice.new },
              { title: t('Úpravy'), path: paths.dashboard.invoice.demo.edit },
            ],
          },
          {
            title: t('Súbory'),
            path: paths.dashboard.fileManager,
            icon: ICONS.folder,
          },
        ],
      },
      {
        subheader: t(t('Admin')),
        items: [
          {
            // default roles : All roles can see this entry.
            // roles: ['user'] Only users can see this item.
            // roles: ['admin'] Only admin can see this item.
            // roles: ['admin', 'manager'] Only admin/manager can see this item.
            // Reference from 'src/guards/RoleBasedGuard'.
            title: t('Prístupy'),
            path: paths.dashboard.permission,
            icon: ICONS.lock,
            roles: ['admin'],
            caption: t('Správa uživateľov'),
          },
          {
            title: t('Pripravujeme'),
            path: '#/dashboard/menu_level',
            icon: ICONS.menuItem,
            children: [
              {
                title: t('menu_level_1a'),
                path: '#/dashboard/menu_level/menu_level_1a',
              },
              {
                title: t('Sociálna sieť'),
                path: '#/dashboard/menu_level/menu_level_1b',
                children: [
                  {
                    title: t('menu_level_2a'),
                    path: '#/dashboard/menu_level/menu_level_1b/menu_level_2a',
                  },
                  {
                    title: t('menu_level_2b'),
                    path: '#/dashboard/menu_level/menu_level_1b/menu_level_2b',
                    children: [
                      {
                        title: t('menu_level_3a'),
                        path: '#/dashboard/menu_level/menu_level_1b/menu_level_2b/menu_level_3a',
                      },
                      {
                        title: t('menu_level_3b'),
                        path: '#/dashboard/menu_level/menu_level_1b/menu_level_2b/menu_level_3b',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    [t]
  );

  return data;
}
