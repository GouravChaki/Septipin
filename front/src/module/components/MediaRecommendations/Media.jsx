// material-ui
import { Grid, Typography } from "@mui/material";

// assets
import {
  IconShare,
  IconAccessPoint,
  IconCircles,
  IconCreditCard,
} from "@tabler/icons-react";

// ==============================|| ANALYTICS DASHBOARD ||============================== //

const Media = () => {

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} lg={8} md={6}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            HELLO
          </Grid>
          <Grid item xs={12} lg={6}>
            A
          </Grid>
          <Grid item xs={12} lg={6}>
            B
          </Grid>
          <Grid item xs={12}>
            C
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} lg={4} md={6}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container alignItems="center" spacing={0}>
              <Grid item xs={12} sm={6}>
                <Grid
                  container
                  alignItems="center"
                  spacing={1}
                >
                  <Grid item>
                    <IconShare stroke={1.5} />
                  </Grid>
                  <Grid item sm zeroMinWidth>
                    <Typography variant="h5" align="center">
                      1000
                    </Typography>
                    <Typography variant="subtitle2" align="center">
                      SHARES
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Grid
                  container
                  alignItems="center"
                  spacing={1}
                >
                  <Grid item>
                    <IconAccessPoint stroke={1.5} />
                  </Grid>
                  <Grid item sm zeroMinWidth>
                    <Typography variant="h5" align="center">
                      600
                    </Typography>
                    <Typography variant="subtitle2" align="center">
                      NETWORK
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container alignItems="center" spacing={0}>
              <Grid item xs={12} sm={6}>
                <Grid
                  container
                  alignItems="center"
                  spacing={1}
                >
                  <Grid item>
                    <IconCircles stroke={1.5} />
                  </Grid>
                  <Grid item sm zeroMinWidth>
                    <Typography variant="h5" align="center">
                      3550
                    </Typography>
                    <Typography variant="subtitle2" align="center">
                      RETURNS
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Grid
                  container
                  alignItems="center"
                  spacing={1}
                >
                  <Grid item>
                    <IconCreditCard stroke={1.5} />
                  </Grid>
                  <Grid item sm zeroMinWidth>
                    <Typography variant="h5" align="center">
                      100%
                    </Typography>
                    <Typography variant="subtitle2" align="center">
                      ORDER
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            E{" "}
          </Grid>
          <Grid item xs={12}>
            F
          </Grid>
          <Grid item xs={12}>
            G
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Media;
