// material-ui
import Grid from '@mui/material/Grid';

// project-imports
import MainCard from 'components/MainCard';
import ComponentHeader from 'components/cards/ComponentHeader';
import Breadcrumb from 'components/@extended/Breadcrumbs';
import ComponentWrapper from 'sections/components-overview/ComponentWrapper';
import ComponentSkeleton from 'sections/components-overview/ComponentSkeleton';

// assets
import { Minus } from 'iconsax-react';

// ==============================|| COMPONENTS - BREADCRUMBS ||============================== //

export default function ComponentBreadcrumb() {
  const basicBreadcrumbsCodeString = `<Breadcrumb
  card 
  title={false}
/>`;

  const separatorBreadcrumbsCodeString = `<Breadcrumb
  card title={false} 
  separator={RightOutlined}
/>`;

  const titleBreadcrumbsCodeString = `<Breadcrumb
  card
  titleBottom={false} 
  separator={RightOutlined}
/>`;

  const bottomBreadcrumbsCodeString = `<Breadcrumb
  card 
  separator={RightOutlined}
/>`;

  const iconsBreadcrumbsCodeString = `<Breadcrumb
  card 
  icons 
  titleBottom={false} 
  separator={RightOutlined}
/>`;

  const dashboardBreadcrumbsCodeString = `<Breadcrumb
  card 
  title 
  icon 
  titleBottom={false} 
  separator={RightOutlined}
/>`;

  const collapsedBreadcrumbsCodeString = `<Breadcrumb
  card 
  title 
  titleBottom={false} 
  maxItems={2} 
  separator={RightOutlined}
/>`;

  const noCardBreadcrumbsCodeString = `<Breadcrumb title divider titleBottom={false} separator={RightOutlined} />`;

  const noDividerBreadcrumbsCodeString = `<Breadcrumb
  title 
  titleBottom={false} 
  separator={RightOutlined} 
  card={false}
/>`;

  return (
    <ComponentSkeleton>
      <ComponentHeader
        title="Breadcrumbs"
        caption="Breadcrumbs allow users to make selections from a range of values."
        directory="src/pages/components-overview/breadcrumbs"
        link="https://mui.com/material-ui/react-breadcrumbs/"
      />
      <ComponentWrapper>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MainCard title="Basic" codeHighlight codeString={basicBreadcrumbsCodeString}>
              <Breadcrumb card title={false} sx={{ mb: '0px !important', bgcolor: 'secondary.lighter' }} />
            </MainCard>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MainCard title="Custom Separator" codeString={separatorBreadcrumbsCodeString}>
              <Breadcrumb card title={false} separator={Minus} sx={{ mb: '0px !important', bgcolor: 'secondary.lighter' }} />
            </MainCard>
          </Grid>
          <Grid item xs={12} md={6}>
            <MainCard title="With Title" codeString={titleBreadcrumbsCodeString}>
              <Breadcrumb card titleBottom={false} sx={{ mb: '0px !important', bgcolor: 'secondary.lighter' }} />
            </MainCard>
          </Grid>
          <Grid item xs={12} md={6}>
            <MainCard title="Title Bottom" codeString={bottomBreadcrumbsCodeString}>
              <Breadcrumb card sx={{ mb: '0px !important', bgcolor: 'secondary.lighter' }} />
            </MainCard>
          </Grid>
          <Grid item xs={12} md={6}>
            <MainCard title="With Icons" codeString={iconsBreadcrumbsCodeString}>
              <Breadcrumb card icons titleBottom={false} sx={{ mb: '0px !important', bgcolor: 'secondary.lighter' }} />
            </MainCard>
          </Grid>
          <Grid item xs={12} md={6}>
            <MainCard title="Only Dashboard Icons" codeString={dashboardBreadcrumbsCodeString}>
              <Breadcrumb card title icon titleBottom={false} sx={{ mb: '0px !important', bgcolor: 'secondary.lighter' }} />
            </MainCard>
          </Grid>
          <Grid item xs={12} md={6}>
            <MainCard title="Collapsed Breadcrumbs" codeString={collapsedBreadcrumbsCodeString}>
              <Breadcrumb title maxItems={2} card titleBottom={false} sx={{ mb: '0px !important', bgcolor: 'secondary.lighter' }} />
            </MainCard>
          </Grid>
          <Grid item xs={12} md={6}>
            <MainCard title="No Card with Divider" codeString={noCardBreadcrumbsCodeString}>
              <Breadcrumb title divider titleBottom={false} sx={{ mb: '0px !important' }} />
            </MainCard>
          </Grid>
          <Grid item xs={12} md={6}>
            <MainCard title="No Card & No Divider" codeString={noDividerBreadcrumbsCodeString}>
              <Breadcrumb title titleBottom={false} sx={{ mb: '0px !important' }} />
            </MainCard>
          </Grid>
        </Grid>
      </ComponentWrapper>
    </ComponentSkeleton>
  );
}
