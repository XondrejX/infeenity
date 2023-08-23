'use client';

// @mui
import { useTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
// hooks
import { useMockedUser } from 'src/hooks/use-mocked-user';
// _mock
import { _appFeatured, _appAuthors, _appInstalled, _appRelated, _appInvoices } from 'src/_mock';
// components
import { useSettingsContext } from 'src/components/settings';
// assets
import { SeoIllustration } from 'src/assets/illustrations';
//
import AppWidget from '../app-widget';
import AppWelcome from '../app-welcome';
import AppFeatured from '../app-featured';
import AppNewInvoice from '../app-new-invoice';
import AppTopAuthors from '../app-top-authors';
import AppTopRelated from '../app-top-related';
import AppAreaInstalled from '../app-area-installed';
import AppWidgetSummary from '../app-widget-summary';
import AppCurrentDownload from '../app-current-download';
import AppTopInstalledCountries from '../app-top-installed-countries';


// Mock Messages
const mockMessages = [
"Keď ide o financie, buď vždy o krok vpred.",
"Tvoj úspech závisí na tvojej odvahe riskovať.",
"Každý deň je nová príležitosť.",
"Nikdy nenechávaj príležitosť uniknúť cez prsty.",
"S každým obchodom sa učíš a rastieš.",
"Rozhodnutia formujú zajtrajšky.",
"Nie je to o tom, koľko zarábate, ale ako zarábate.",
"Vždy sa orientuj na trhu a buď pripravený.",
"Finančné úspechy sú výsledkom odvahy, vedenia a stratégie.",
"S každým úspechom si bližšie k svojmu snu.",
"Keď sa trh mení, adaptuj sa a buď flexibilný.",
"Základom úspechu je neustále vzdelávanie.",
"Sny sa môžu stať skutočnosťou s tvrdou prácou a stratégiou.",
"Výzvy sú len odrazy príležitostí.",
"Nie je dôležité padnúť, ale vstať a pokračovať.",
"Rozhodnutia určujú osud.",
"Ver v svoje schopnosti a trh ti ukáže cestu.",
"Otváraj dvere novým príležitostiam každý deň.",
"Sústred sa na svoje ciele, nie na prekážky.",
"Každý deň je novým začiatkom.",
"Buduj svoju budúcnosť s odhodlaním.",
"Nečakaj na príležitosť. Vytvor si ju.",
"Nie je to o šťastí, je to o zručnostiach a odhodlaní.",
"Trh nie je nepriateľ, je to nástroj.",
"Tvoja cesta k úspechu začína dnes.",
"Keď sa cítiš stratený, vráť sa k svojim cieľom.",
"Viera v seba je tvoj najlepší kapitál.",
"Každá investícia je krok k tvojmu snu.",
"Nikdy nezastavuj. Trh nečaká.",
"Ostávaj silný, aj keď trh klesá.",
"Trpezlivosť je kľúčom k úspechu.",
"Sleduj svoju intuíciu a ver vo svoje rozhodnutia.",
"Nenechaj sa zastaviť strachom alebo pochybnosťami.",
"Vždy hľadaj príležitosti tam, kde iní vidia riziko.",
"Tvoja cesta k bohatstvu začína iba rozhodnutím."
];

// ----------------------------------------------------------------------

export default function OverviewAppView() {
  const { user } = useMockedUser();

  const theme = useTheme();

  const settings = useSettingsContext();

  // Get a random message from the mockMessages array
  const randomMessage = mockMessages[Math.floor(Math.random() * mockMessages.length)];

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Grid container spacing={3}>
        <Grid xs={12} md={8}>
          <AppWelcome
            title={`Vítaj späť  👋 \n ${user?.displayName}`}
            description={randomMessage}
            img={<SeoIllustration />}
            action={
              <Button variant="contained" color="primary">
                Zobraziť úlohy
              </Button>
            }
          />
        </Grid>

        <Grid xs={12} md={4}>
          <AppFeatured list={_appFeatured} />
        </Grid>


        <Grid xs={12} md={6} lg={4}>
          <AppCurrentDownload
            title="Tvoj cieľ"
            chart={{
              series: [
                { label: '1. stretnutie', value: 12244 },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AppAreaInstalled
            subheader="Ročné výnosy"
            chart={{
              categories: [
                'Január',
                'Február',
                'Marec',
                'Apríl',
                'Máj',
                'Jún',
                'Júl',
                'August',
                'September',
                'Október',
                'November',
                'December',
              ],
              series: [
                {
                  year: '2023',
                  data: [
                    {
                      name: 'Investície',
                      data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 35, 51, 49],
                    },
                    {
                      name: 'PZP',
                      data: [10, 34, 13, 56, 77, 88, 99, 77, 45, 13, 56, 77],
                    },
                  ],
                },
                {
                  year: '2019',
                  data: [
                    {
                      name: 'Investície',
                      data: [51, 35, 41, 10, 91, 69, 62, 148, 91, 69, 62, 49],
                    },
                    {
                      name: 'PZP',
                      data: [56, 13, 34, 10, 77, 99, 88, 45, 77, 99, 88, 77],
                    },
                  ],
                },
              ],
            }}
          />
        </Grid>


        <Grid xs={12} lg={8}>
          <AppNewInvoice
            title="Tvoj asistent Cheety"
            tableData={_appInvoices}
            tableLabels={[
              { id: 'id', label: 'Invoice ID' },
              { id: 'category', label: 'Category' },
              { id: 'price', label: 'Price' },
              { id: 'status', label: 'Status' },
              { id: '' },
            ]}
          />
        </Grid>

        <Grid xs={12} lg={8}>
          <AppNewInvoice
            title="Najnovšie zmluvy"
            tableData={_appInvoices}
            tableLabels={[
              { id: 'id', label: 'Invoice ID' },
              { id: 'category', label: 'Category' },
              { id: 'price', label: 'Price' },
              { id: 'status', label: 'Status' },
              { id: '' },
            ]}
          />
        </Grid>


        <Grid xs={12} md={6} lg={4}>
          <AppTopAuthors title="Top klienti" list={_appAuthors} />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppTopRelated title="Top akcie" list={_appRelated} />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppTopInstalledCountries title="Top indexy" list={_appInstalled} />
        </Grid>



        <Grid xs={12} md={6} lg={4}>
          <Stack spacing={3}>
            <AppWidget
              title="Klientov"
              total={213}
              icon="solar:user-rounded-bold"
              chart={{
                series: 48,
              }}
            />

            <AppWidget
              title="Zmlúv"
              total={983}
              icon="fluent:mail-24-filled"
              color="info"
              chart={{
                series: 75,
              }}
            />
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
