import { Plot } from '../utlis/plot';
export default function SimpleGraph() {
  return (
    <Plot
      onRelayout={(e) => console.log(e)}
      data={[
        {
          name: 'Backend 01',
          x: xAxis,
          y: yAxis1,
          type: 'scatter',
          mode: 'line',
          fill: 'tozeroy',
          fillcolor: 'rgba(0, 153, 255, 0.3)',
          line: {
            shape: 'spline',
            smoothing: 1.3,
            color: 'rgba(0, 153, 255, 1)',
            width: 0.7,
          },
        },
        {
          name: 'Backend 02',
          x: xAxis,
          y: yAxis2,
          type: 'scatter',
          mode: 'line',
          fill: 'tozeroy',
          fillcolor: 'rgba(0, 255, 0, 0.3)',
          line: {
            shape: 'spline',
            smoothing: 1.3,
            color: 'rgba(0, 255, 0,1)',
            width: 0.7,
          },
        },
      ]}
      layout={{
        // width: '100%',
        xaxis: {
          range: true,
          // showgrid: false,
          dtick: 50,
          gridcolor: 'rgba(255,255,255,0.2)',
          tickangle: 40,
          tickformat: '%H~%M~%S',
        },
        yaxis: {
          gridcolor: 'rgba(255,255,255,0.2)',
        },
        height: 500,
        title: 'Simple graph',
        paper_bgcolor: 'rgba(0,0,0,0)',
        plot_bgcolor: 'rgba(0,0,0,0)',
        font: {
          color: 'white',
        },
      }}
    />
  );
}

const xAxis = [
  '06:00:00',
  '06:00:10',
  '06:00:20',
  '06:00:30',
  '06:00:40',
  '06:00:50',
  '06:01:00',
  '06:01:10',
  '06:01:20',
  '06:01:30',
  '06:01:40',
  '06:01:50',
  '06:02:00',
  '06:02:10',
  '06:02:20',
  '06:02:30',
  '06:02:40',
  '06:02:50',
  '06:03:00',
  '06:03:10',
  '06:03:20',
  '06:03:30',
  '06:03:40',
  '06:03:50',
  '06:04:00',
  '06:04:10',
  '06:04:20',
  '06:04:30',
  '06:04:40',
  '06:04:50',
  '06:05:00',
  '06:05:10',
  '06:05:20',
  '06:05:30',
  '06:05:40',
  '06:05:50',
  '06:06:00',
  '06:06:10',
  '06:06:20',
  '06:06:30',
  '06:06:40',
  '06:06:50',
  '06:07:00',
  '06:07:10',
  '06:07:20',
  '06:07:30',
  '06:07:40',
  '06:07:50',
  '06:08:00',
  '06:08:10',
  '06:08:20',
  '06:08:30',
  '06:08:40',
  '06:08:50',
  '06:09:00',
  '06:09:10',
  '06:09:20',
  '06:09:30',
  '06:09:40',
  '06:09:50',
  '06:10:00',
  '06:10:10',
  '06:10:20',
  '06:10:30',
  '06:10:40',
  '06:10:50',
  '06:11:00',
  '06:11:10',
  '06:11:20',
  '06:11:30',
  '06:11:40',
  '06:11:50',
  '06:12:00',
  '06:12:10',
  '06:12:20',
  '06:12:30',
  '06:12:40',
  '06:12:50',
  '06:13:00',
  '06:13:10',
  '06:13:20',
  '06:13:30',
  '06:13:40',
  '06:13:50',
  '06:14:00',
  '06:14:10',
  '06:14:20',
  '06:14:30',
  '06:14:40',
  '06:14:50',
  '06:15:00',
  '06:15:10',
  '06:15:20',
  '06:15:30',
  '06:15:40',
  '06:15:50',
  '06:16:00',
  '06:16:10',
  '06:16:20',
  '06:16:30',
  '06:16:40',
  '06:16:50',
  '06:17:00',
  '06:17:10',
  '06:17:20',
  '06:17:30',
  '06:17:40',
  '06:17:50',
  '06:18:00',
  '06:18:10',
  '06:18:20',
  '06:18:30',
  '06:18:40',
  '06:18:50',
  '06:19:00',
  '06:19:10',
  '06:19:20',
  '06:19:30',
  '06:19:40',
  '06:19:50',
  '06:20:00',
  '06:20:10',
  '06:20:20',
  '06:20:30',
  '06:20:40',
  '06:20:50',
  '06:21:00',
  '06:21:10',
  '06:21:20',
  '06:21:30',
  '06:21:40',
  '06:21:50',
  '06:22:00',
  '06:22:10',
  '06:22:20',
  '06:22:30',
  '06:22:40',
  '06:22:50',
  '06:23:00',
  '06:23:10',
  '06:23:20',
  '06:23:30',
  '06:23:40',
  '06:23:50',
  '06:24:00',
  '06:24:10',
  '06:24:20',
  '06:24:30',
  '06:24:40',
  '06:24:50',
  '06:25:00',
  '06:25:10',
  '06:25:20',
  '06:25:30',
  '06:25:40',
  '06:25:50',
  '06:26:00',
  '06:26:10',
  '06:26:20',
  '06:26:30',
  '06:26:40',
  '06:26:50',
  '06:27:00',
  '06:27:10',
  '06:27:20',
  '06:27:30',
  '06:27:40',
  '06:27:50',
  '06:28:00',
  '06:28:10',
  '06:28:20',
  '06:28:30',
  '06:28:40',
  '06:28:50',
  '06:29:00',
  '06:29:10',
  '06:29:20',
  '06:29:30',
  '06:29:40',
  '06:29:50',
  '06:30:00',
  '06:30:10',
  '06:30:20',
  '06:30:30',
  '06:30:40',
  '06:30:50',
  '06:31:00',
  '06:31:10',
  '06:31:20',
  '06:31:30',
  '06:31:40',
  '06:31:50',
  '06:32:00',
  '06:32:10',
  '06:32:20',
  '06:32:30',
  '06:32:40',
  '06:32:50',
  '06:33:00',
  '06:33:10',
  '06:33:20',
  '06:33:30',
  '06:33:40',
  '06:33:50',
  '06:34:00',
  '06:34:10',
  '06:34:20',
  '06:34:30',
  '06:34:40',
  '06:34:50',
  '06:35:00',
  '06:35:10',
  '06:35:20',
  '06:35:30',
  '06:35:40',
  '06:35:50',
  '06:36:00',
  '06:36:10',
  '06:36:20',
  '06:36:30',
  '06:36:40',
  '06:36:50',
  '06:37:00',
  '06:37:10',
  '06:37:20',
  '06:37:30',
  '06:37:40',
  '06:37:50',
  '06:38:00',
  '06:38:10',
  '06:38:20',
  '06:38:30',
  '06:38:40',
  '06:38:50',
  '06:39:00',
  '06:39:10',
  '06:39:20',
  '06:39:30',
  '06:39:40',
  '06:39:50',
  '06:40:00',
  '06:40:10',
  '06:40:20',
  '06:40:30',
  '06:40:40',
  '06:40:50',
  '06:41:00',
  '06:41:10',
  '06:41:20',
  '06:41:30',
  '06:41:40',
  '06:41:50',
  '06:42:00',
  '06:42:10',
  '06:42:20',
  '06:42:30',
  '06:42:40',
  '06:42:50',
  '06:43:00',
  '06:43:10',
  '06:43:20',
  '06:43:30',
  '06:43:40',
  '06:43:50',
  '06:44:00',
  '06:44:10',
  '06:44:20',
  '06:44:30',
  '06:44:40',
  '06:44:50',
  '06:45:00',
  '06:45:10',
  '06:45:20',
  '06:45:30',
  '06:45:40',
  '06:45:50',
  '06:46:00',
  '06:46:10',
  '06:46:20',
  '06:46:30',
  '06:46:40',
  '06:46:50',
  '06:47:00',
  '06:47:10',
  '06:47:20',
  '06:47:30',
  '06:47:40',
  '06:47:50',
  '06:48:00',
  '06:48:10',
  '06:48:20',
  '06:48:30',
  '06:48:40',
  '06:48:50',
  '06:49:00',
  '06:49:10',
  '06:49:20',
  '06:49:30',
  '06:49:40',
  '06:49:50',
  '06:50:00',
  '06:50:10',
  '06:50:20',
  '06:50:30',
  '06:50:40',
  '06:50:50',
  '06:51:00',
  '06:51:10',
  '06:51:20',
  '06:51:30',
  '06:51:40',
  '06:51:50',
  '06:52:00',
  '06:52:10',
  '06:52:20',
  '06:52:30',
  '06:52:40',
  '06:52:50',
  '06:53:00',
  '06:53:10',
  '06:53:20',
  '06:53:30',
  '06:53:40',
  '06:53:50',
  '06:54:00',
  '06:54:10',
  '06:54:20',
  '06:54:30',
  '06:54:40',
  '06:54:50',
  '06:55:00',
  '06:55:10',
  '06:55:20',
  '06:55:30',
  '06:55:40',
  '06:55:50',
  '06:56:00',
  '06:56:10',
  '06:56:20',
  '06:56:30',
  '06:56:40',
  '06:56:50',
  '06:57:00',
  '06:57:10',
  '06:57:20',
  '06:57:30',
  '06:57:40',
  '06:57:50',
  '06:58:00',
  '06:58:10',
  '06:58:20',
  '06:58:30',
  '06:58:40',
  '06:58:50',
  '06:59:00',
  '06:59:10',
  '06:59:20',
  '06:59:30',
  '06:59:40',
  '06:59:50',
  '07:00:00',
  '07:00:10',
  '07:00:20',
  '07:00:30',
  '07:00:40',
  '07:00:50',
  '07:01:00',
  '07:01:10',
  '07:01:20',
  '07:01:30',
  '07:01:40',
  '07:01:50',
  '07:02:00',
  '07:02:10',
  '07:02:20',
  '07:02:30',
  '07:02:40',
  '07:02:50',
  '07:03:00',
  '07:03:10',
  '07:03:20',
  '07:03:30',
  '07:03:40',
  '07:03:50',
  '07:04:00',
  '07:04:10',
  '07:04:20',
  '07:04:30',
  '07:04:40',
  '07:04:50',
  '07:05:00',
  '07:05:10',
  '07:05:20',
  '07:05:30',
  '07:05:40',
  '07:05:50',
  '07:06:00',
  '07:06:10',
  '07:06:20',
  '07:06:30',
  '07:06:40',
  '07:06:50',
  '07:07:00',
  '07:07:10',
  '07:07:20',
  '07:07:30',
  '07:07:40',
  '07:07:50',
  '07:08:00',
  '07:08:10',
  '07:08:20',
  '07:08:30',
  '07:08:40',
  '07:08:50',
  '07:09:00',
  '07:09:10',
  '07:09:20',
  '07:09:30',
  '07:09:40',
  '07:09:50',
  '07:10:00',
  '07:10:10',
  '07:10:20',
  '07:10:30',
  '07:10:40',
  '07:10:50',
  '07:11:00',
  '07:11:10',
  '07:11:20',
  '07:11:30',
  '07:11:40',
  '07:11:50',
  '07:12:00',
  '07:12:10',
  '07:12:20',
  '07:12:30',
  '07:12:40',
  '07:12:50',
  '07:13:00',
  '07:13:10',
  '07:13:20',
  '07:13:30',
  '07:13:40',
  '07:13:50',
  '07:14:00',
  '07:14:10',
  '07:14:20',
  '07:14:30',
  '07:14:40',
  '07:14:50',
  '07:15:00',
  '07:15:10',
  '07:15:20',
  '07:15:30',
  '07:15:40',
  '07:15:50',
  '07:16:00',
  '07:16:10',
  '07:16:20',
  '07:16:30',
  '07:16:40',
  '07:16:50',
  '07:17:00',
  '07:17:10',
  '07:17:20',
  '07:17:30',
  '07:17:40',
  '07:17:50',
  '07:18:00',
  '07:18:10',
  '07:18:20',
  '07:18:30',
  '07:18:40',
  '07:18:50',
  '07:19:00',
  '07:19:10',
  '07:19:20',
  '07:19:30',
  '07:19:40',
  '07:19:50',
  '07:20:00',
  '07:20:10',
  '07:20:20',
  '07:20:30',
  '07:20:40',
  '07:20:50',
  '07:21:00',
  '07:21:10',
  '07:21:20',
  '07:21:30',
  '07:21:40',
  '07:21:50',
  '07:22:00',
  '07:22:10',
  '07:22:20',
  '07:22:30',
  '07:22:40',
  '07:22:50',
  '07:23:00',
  '07:23:10',
  '07:23:20',
  '07:23:30',
  '07:23:40',
  '07:23:50',
  '07:24:00',
  '07:24:10',
  '07:24:20',
  '07:24:30',
  '07:24:40',
  '07:24:50',
  '07:25:00',
  '07:25:10',
  '07:25:20',
  '07:25:30',
  '07:25:40',
  '07:25:50',
  '07:26:00',
  '07:26:10',
  '07:26:20',
  '07:26:30',
  '07:26:40',
  '07:26:50',
  '07:27:00',
  '07:27:10',
  '07:27:20',
  '07:27:30',
  '07:27:40',
  '07:27:50',
  '07:28:00',
  '07:28:10',
  '07:28:20',
  '07:28:30',
  '07:28:40',
  '07:28:50',
  '07:29:00',
  '07:29:10',
  '07:29:20',
  '07:29:30',
  '07:29:40',
  '07:29:50',
  '07:30:00',
  '07:30:10',
  '07:30:20',
  '07:30:30',
  '07:30:40',
  '07:30:50',
  '07:31:00',
  '07:31:10',
  '07:31:20',
  '07:31:30',
  '07:31:40',
  '07:31:50',
  '07:32:00',
  '07:32:10',
  '07:32:20',
  '07:32:30',
  '07:32:40',
  '07:32:50',
  '07:33:00',
  '07:33:10',
  '07:33:20',
  '07:33:30',
  '07:33:40',
  '07:33:50',
  '07:34:00',
  '07:34:10',
  '07:34:20',
  '07:34:30',
  '07:34:40',
  '07:34:50',
  '07:35:00',
  '07:35:10',
  '07:35:20',
  '07:35:30',
  '07:35:40',
  '07:35:50',
  '07:36:00',
  '07:36:10',
  '07:36:20',
  '07:36:30',
  '07:36:40',
  '07:36:50',
  '07:37:00',
  '07:37:10',
  '07:37:20',
  '07:37:30',
  '07:37:40',
  '07:37:50',
  '07:38:00',
  '07:38:10',
  '07:38:20',
  '07:38:30',
  '07:38:40',
  '07:38:50',
  '07:39:00',
  '07:39:10',
  '07:39:20',
  '07:39:30',
  '07:39:40',
  '07:39:50',
  '07:40:00',
  '07:40:10',
  '07:40:20',
  '07:40:30',
  '07:40:40',
  '07:40:50',
  '07:41:00',
  '07:41:10',
  '07:41:20',
  '07:41:30',
  '07:41:40',
  '07:41:50',
  '07:42:00',
  '07:42:10',
  '07:42:20',
  '07:42:30',
  '07:42:40',
  '07:42:50',
  '07:43:00',
  '07:43:10',
  '07:43:20',
  '07:43:30',
  '07:43:40',
  '07:43:50',
  '07:44:00',
  '07:44:10',
  '07:44:20',
  '07:44:30',
  '07:44:40',
  '07:44:50',
  '07:45:00',
  '07:45:10',
  '07:45:20',
  '07:45:30',
  '07:45:40',
  '07:45:50',
  '07:46:00',
  '07:46:10',
  '07:46:20',
  '07:46:30',
  '07:46:40',
  '07:46:50',
  '07:47:00',
  '07:47:10',
  '07:47:20',
  '07:47:30',
  '07:47:40',
  '07:47:50',
  '07:48:00',
  '07:48:10',
  '07:48:20',
  '07:48:30',
  '07:48:40',
  '07:48:50',
  '07:49:00',
  '07:49:10',
  '07:49:20',
  '07:49:30',
  '07:49:40',
  '07:49:50',
  '07:50:00',
  '07:50:10',
  '07:50:20',
  '07:50:30',
  '07:50:40',
  '07:50:50',
  '07:51:00',
  '07:51:10',
  '07:51:20',
  '07:51:30',
  '07:51:40',
  '07:51:50',
  '07:52:00',
  '07:52:10',
  '07:52:20',
  '07:52:30',
  '07:52:40',
  '07:52:50',
  '07:53:00',
  '07:53:10',
  '07:53:20',
  '07:53:30',
  '07:53:40',
  '07:53:50',
  '07:54:00',
  '07:54:10',
  '07:54:20',
  '07:54:30',
  '07:54:40',
  '07:54:50',
  '07:55:00',
  '07:55:10',
  '07:55:20',
  '07:55:30',
  '07:55:40',
  '07:55:50',
  '07:56:00',
  '07:56:10',
  '07:56:20',
  '07:56:30',
  '07:56:40',
  '07:56:50',
  '07:57:00',
  '07:57:10',
  '07:57:20',
  '07:57:30',
  '07:57:40',
  '07:57:50',
  '07:58:00',
  '07:58:10',
  '07:58:20',
  '07:58:30',
  '07:58:40',
  '07:58:50',
  '07:59:00',
  '07:59:10',
  '07:59:20',
  '07:59:30',
  '07:59:40',
  '07:59:50',
];
const yAxis1 = [
  55, 54, 58, 60, 55, 56, 53, 60, 60, 54, 59, 60, 52, 57, 56, 54, 59, 58, 57,
  55, 56, 50, 54, 52, 51, 56, 55, 59, 56, 53, 56, 52, 52, 57, 54, 50, 58, 57,
  55, 52, 57, 58, 51, 59, 60, 50, 56, 53, 59, 58, 50, 51, 56, 56, 60, 53, 52,
  50, 53, 59, 54, 51, 52, 60, 50, 51, 53, 58, 60, 52, 59, 53, 52, 52, 58, 50,
  60, 59, 60, 58, 51, 52, 55, 56, 55, 51, 60, 54, 56, 55, 58, 50, 51, 53, 60,
  57, 60, 53, 54, 59, 50, 55, 58, 58, 53, 56, 52, 59, 51, 58, 53, 56, 58, 60,
  58, 52, 56, 50, 60, 60, 58, 50, 54, 52, 53, 54, 56, 53, 51, 51, 55, 51, 58,
  50, 54, 59, 56, 57, 60, 58, 55, 55, 55, 55, 52, 57, 59, 58, 50, 51, 54, 59,
  52, 57, 60, 56, 53, 51, 54, 52, 53, 56, 50, 55, 57, 56, 53, 58, 58, 57, 60,
  58, 50, 58, 56, 56, 59, 52, 60, 55, 51, 59, 60, 52, 52, 54, 52, 56, 55, 50,
  52, 54, 50, 58, 59, 53, 59, 52, 59, 54, 52, 55, 59, 58, 60, 57, 52, 60, 56,
  50, 51, 54, 60, 51, 57, 60, 50, 58, 51, 50, 58, 53, 53, 56, 50, 58, 60, 55,
  50, 53, 56, 59, 51, 53, 53, 57, 57, 51, 55, 53, 50, 59, 51, 59, 54, 60, 50,
  53, 58, 56, 60, 56, 55, 60, 55, 56, 56, 59, 51, 53, 51, 52, 51, 50, 57, 53,
  53, 54, 58, 50, 59, 55, 56, 54, 54, 54, 52, 54, 52, 56, 50, 53, 57, 56, 53,
  57, 52, 60, 50, 59, 56, 53, 57, 50, 51, 54, 51, 56, 56, 52, 56, 50, 54, 56,
  59, 59, 58, 58, 54, 50, 59, 58, 58, 51, 58, 56, 55, 55, 58, 52, 55, 57, 55,
  57, 59, 59, 55, 58, 52, 53, 51, 55, 54, 58, 52, 60, 53, 52, 50, 50, 51, 54,
  59, 52, 57, 54, 50, 54, 57, 57, 56, 52, 58, 58, 60, 57, 52, 53, 50, 55, 50,
  53, 51, 51, 55, 57, 54, 60, 57, 56, 57, 60, 60, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 59, 56, 57, 54, 50, 59, 56, 55, 55, 50, 59, 50, 51, 53, 52, 57,
  59, 56, 58, 54, 55, 57, 57, 51, 51, 50, 56, 56, 60, 54, 55, 59, 53, 50, 59,
  56, 52, 54, 56, 50, 60, 53, 58, 54, 56, 52, 59, 53, 50, 54, 58, 60, 51, 59,
  51, 51, 60, 51, 51, 54, 59, 56, 59, 55, 57, 60, 60, 54, 56, 50, 55, 59, 58,
  56, 53, 58, 54, 59, 59, 57, 51, 52, 50, 57, 56, 50, 57, 53, 55, 60, 60, 58,
  55, 52, 57, 58, 57, 60, 54, 54, 54, 59, 50, 51, 58, 51, 51, 51, 54, 56, 53,
  50, 54, 58, 50, 51, 53, 60, 60, 57, 54, 55, 60, 59, 58, 58, 60, 54, 54, 55,
  53, 50, 58, 56, 59, 57, 55, 50, 59, 54, 57, 60, 50, 51, 50, 59, 59, 53, 60,
  52, 53, 51, 51, 56, 55, 56, 60, 51, 52, 54, 56, 54, 52, 55, 55, 57, 58, 51,
  57, 51, 55, 53, 51, 52, 56, 53, 57, 56, 57, 51, 60, 55, 51, 53, 53, 54, 55,
  54, 53, 56, 51, 59, 52, 60, 58, 52, 51, 56, 54, 55, 60, 55, 53, 56, 54, 58,
  53, 55, 60, 58, 58, 54, 57, 52, 55, 55, 56, 51, 51, 52, 55, 60, 52, 54, 50,
  55, 51, 53, 53, 52, 52, 59, 60, 55, 57, 51, 51, 54, 54, 58, 55, 51, 54, 57,
  53, 50, 50, 50, 60, 54, 52, 59, 58, 57, 51, 52, 52, 52, 51, 59, 56, 56, 57,
  55, 58, 56, 52, 56, 60, 60, 57, 54, 56, 54, 59, 57, 57, 55, 57, 52, 50, 59,
  59, 59, 55, 57, 51, 58, 60, 50, 56, 60, 55, 57, 58, 55, 55, 51, 60, 59, 59,
  59, 56, 52, 53, 56, 52, 56, 60, 55, 54, 58, 59, 59, 58, 50, 54, 58, 55, 51,
  59, 60, 58, 54, 57, 50, 57, 53, 56, 52, 60, 50,
];
const yAxis2 = [
  17, 23, 27, 18, 16, 15, 27, 18, 25, 24, 12, 21, 20, 20, 29, 28, 19, 23, 12,
  11, 26, 19, 18, 10, 15, 20, 27, 12, 30, 10, 19, 21, 17, 10, 11, 14, 15, 22,
  25, 29, 17, 18, 20, 15, 15, 25, 28, 21, 11, 29, 12, 18, 28, 21, 27, 23, 30,
  18, 10, 22, 22, 30, 20, 28, 27, 24, 10, 11, 19, 21, 21, 13, 16, 12, 13, 20,
  22, 30, 27, 18, 19, 19, 12, 18, 12, 12, 16, 16, 24, 18, 21, 17, 22, 22, 23,
  23, 11, 13, 14, 23, 15, 21, 11, 14, 20, 14, 26, 19, 23, 13, 22, 10, 21, 16,
  13, 19, 15, 27, 18, 13, 17, 24, 27, 18, 26, 26, 15, 28, 17, 18, 30, 19, 25,
  28, 15, 12, 26, 13, 14, 29, 22, 22, 29, 29, 17, 22, 29, 21, 24, 19, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 29, 18, 11, 21, 13, 24, 13, 28, 20, 13, 22, 28, 18, 27, 14, 16, 20, 22,
  21, 20, 26, 25, 21, 19, 21, 30, 17, 20, 21, 19, 30, 15, 13, 18, 25, 15, 16,
  16, 25, 20, 16, 30, 30, 26, 24, 22, 15, 17, 26, 30, 13, 28, 12, 10, 21, 23,
  11, 19, 17, 16, 14, 29, 23, 21, 20, 23, 22, 26, 17, 23, 16, 16, 17, 25, 14,
  17, 29, 15, 19, 22, 20, 11, 15, 26, 24, 13, 14, 19, 14, 19, 21, 30, 14, 18,
  18, 17, 21, 25, 20, 18, 27, 22, 11, 25, 20, 15, 18, 16, 14, 28, 22, 20, 26,
  26, 22, 21, 16, 22, 19, 17, 30, 19, 17, 29, 24, 24, 11, 26, 26, 13, 12, 18,
  29, 20, 30, 15, 10, 14, 23, 10, 19, 29, 28, 19, 16, 27, 10, 13, 12, 17, 18,
  20, 21, 15, 19, 25, 24, 11, 24, 16, 14, 23, 12, 19, 21, 21, 20, 15, 14, 12,
  24, 22, 19, 18, 17, 23, 13, 11, 26, 22, 14, 26, 24, 13, 10, 20, 19, 18, 14,
  15, 14, 28, 19, 16, 12, 16, 23, 29, 21, 11, 16, 11, 26, 17, 11, 25, 29, 10,
  22, 12, 28, 21, 10, 16, 19, 28, 22, 20, 20, 14, 16, 22, 15, 12, 18, 21, 22,
  19, 29, 27, 23, 28, 22, 15, 29, 24, 16, 20, 28, 27, 11, 29, 20, 13, 12, 13,
  29, 15, 19, 30, 12, 14, 29, 23, 29, 12, 26, 15, 30, 21, 13, 26, 15, 27, 14,
  20, 24, 15, 27, 22, 21, 28, 25, 14, 14, 10, 13, 17, 15, 22, 30, 15, 11, 12,
  24, 23, 15, 21, 25, 10, 30, 24, 24, 23, 18, 19, 16, 23, 20, 27, 23, 11, 26,
  28, 27, 14, 21, 11, 23, 17, 29, 11, 11, 18, 17, 20, 19, 20, 19, 10, 24, 24,
  26, 19, 15, 27, 22, 10, 22, 18, 28, 24, 21, 18, 17, 18, 14, 17, 10, 11, 28,
  30, 17, 12, 15, 14, 16, 30, 15, 10, 25, 21, 14, 18, 29, 26, 15, 25, 19, 16,
  10, 30, 19, 21, 15, 12, 14, 29, 16, 19, 18, 17, 24, 30, 26, 27, 13, 24, 11,
  27, 28, 26, 15, 13, 18, 17, 23, 11, 17, 15, 27, 11, 13, 29, 27, 22, 30, 13,
  28, 17, 20, 16, 13, 22, 30, 27, 11, 21, 20, 20, 13, 12, 29, 15, 20, 15, 10,
  24, 19, 18, 22, 29, 23, 16, 26, 14, 11, 28, 17, 18, 13, 25, 27, 27, 15, 14,
  10, 23, 30, 30, 23, 27, 25, 28, 24, 28, 26, 29, 16, 30, 28, 19, 24, 10, 27,
  12, 17, 10, 20, 16, 24, 18, 17, 18, 28, 28, 12, 29, 16, 18, 21, 20, 27, 11,
  23, 30, 14, 30, 30, 10, 23, 12, 12, 14, 21, 13, 13, 26, 18, 20, 20, 21, 17,
  12, 16, 30, 27, 16, 20, 24, 14, 18, 11, 21, 11, 21, 19, 16, 26, 17, 20, 28,
  26, 19, 21, 30, 23, 14, 20, 24, 11, 20, 17, 21, 23, 21, 30, 26, 13, 18, 16,
  26, 19, 19, 24, 24, 29, 26, 25,
];