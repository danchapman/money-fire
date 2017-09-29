import React from 'react'
import PropTypes from 'prop-types'


export const Counter = ({ candidates, increment, doubleAsync }) => (
  <div>
    <label className="vote-label">
      Please choose a candidate:
      <select className="form-control vote-select">
        <option value="Bullet Train">Bullet Train</option>
        <option value="FLACK">FLACK</option>
        <option value="Wild Cats">Wild Cats</option>
        <option value="Solar Mules">Solar Mules</option>
        <option value="Autechre">Autechre</option>
        <option value="Money Fire">Money Fire</option>
        <option value="Wonder Twins">Wonder Twins</option>
        <option value="Jerrys Team">Jerrys Team</option>
        <option value="Haos Team">Haos Team</option>

      </select>
    </label>
    <label className="vote-label">
      Please select the voter:
      <select className="form-control vote-select">
        <option value="Niles">Niles</option>
        <option value="Chris">Chris</option>
        <option value="Jim">Jim</option>
        <option value="Amanda">Amanda</option>
        <option value="Kevin">Kevin</option>
        <option value="Chappy">Chappy</option>
        <option value="Egan">Egan</option>
        <option value="Jerry">Jerry</option>
        <option value="Alex">Alex</option>
        <option value="Krishan">Krishan</option>
        <option value="Chuck">Chuck</option>
        <option value="Paul">Paul</option>
        <option value="Richard">Richard</option>
        <option value="Elise">Elise</option>
        <option value="Todd">Todd</option>
        <option value="Scott">Scott</option>
        <option value="Taylor">Taylor</option>
        <option value="Aimee">Aimee</option>
        <option value="Lance">Lance</option>
        <option value="Hao">Hao</option>
      </select>
    </label>
    <input className="form-control vote-button" type="submit" value="Vote" />
  </div>
)
Counter.propTypes = {
  candidates: PropTypes.object.isRequired,
  increment: PropTypes.func.isRequired,
  doubleAsync: PropTypes.func.isRequired,
}

export default Counter
