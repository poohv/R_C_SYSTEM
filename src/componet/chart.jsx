import React from "react";
import { Chart as ChartJS, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";
import datadummy from "../data.json";
ChartJS.register(...registerables);

const labels = datadummy.data.map((data) => data.song.map((day) => day.name));

export const data = {
  labels,
  datasets: [
    {
      label: "ranking",
      data: datadummy.data.map((data) => data.ranking),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "pre_ranking",
      data: datadummy.data.map((data) => data.pre_ranking),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "시간별 랭킹 리스트",
    },
  },
};

const chart = () => {
  return (
    <div>
      <Bar data={data} options={options} width={700} height={200} />

      <section class="content">
        <div class="container-fluid">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">DataTable with default features</h3>
            </div>

            <div class="card-body">
              <table id="example1" class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>순위</th>
                    <th>1시간 전</th>
                    <th>가수</th>
                    <th>제목</th>
                    <th>일카운트</th>
                  </tr>
                </thead>
                <tbody>
                  {datadummy.data.map((data) => (
                    <tr>
                      <td>{data.ranking}</td>
                      <td>{data.pre_ranking}</td>
                      <td>
                        {data.song.map((data) =>
                          data.artists.map((res) => res.name)
                        )}
                      </td>
                      <td>{data.song.map((data) => data.name)}</td>
                      <td>{data.daily_count}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default chart;
