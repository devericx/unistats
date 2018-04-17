import React from 'react';
import Stat from './Stat';

const StatTable = props => (
  <table className="statTable">
    <tbody>
      <tr>
        <td>
          <Stat header="Class" body={props.class} />
        </td>
        <td>
          <Stat header="Unweighted GPA" body={props.ugpa} />
        </td>
        <td>
          <Stat header="Weighted GPA" body={props.wgpa} />
        </td>
      </tr>
      <tr>
        <td>
          <Stat header="New SAT" body={props.nsat} />
        </td>
        <td>
          <Stat header="Old SAT" body={props.osat} />
        </td>
        <td>
          <Stat header="ACT" body={props.act} />
        </td>
      </tr>
    </tbody>
  </table>
);

export default StatTable;
