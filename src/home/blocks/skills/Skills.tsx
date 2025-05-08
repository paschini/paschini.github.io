/** @format */

import './Skills.css';

const Skills = () => (
  <div className='skills'>
    <h3>Languages</h3>
    <p>Fluent English, Advanced Swedish, Basic Spanish, Native Portuguese.</p>

    <h3>Programming</h3>
    <p>
      Great knowledge and interest on programming languages such as Javascript
      (including Typescript), Java, current frameworks such as React and
      SpringBoot.
    </p>
    <p>
      Knowledge of additional programming languages, such as Swift, C#, Python,
      GO lang.
    </p>

    <h3>CI-CD</h3>
    <p>
      Knowledge and interest on the standard CI-CD strategies, including
      kubernetes/YAML based deployment systems, including direct kubectl
      actions, Helm charts, Github Actions.
    </p>

    <h3>Database</h3>
    <p>
      Knowledge and interest on the standard web based data solutions such as
      MySQL, PostgreSQL, data transfer models such as GRPC and JSON.
    </p>

    <h3>Software Architecture</h3>
    <p>
      Great knowledge on how FE and BE interact, how the choice of serialization
      layer affects the FE, limitation of GRPC based systems when coupled with a
      GraphQL layer and pub-sub models involving Kafka.
    </p>

    <p>
      Well versed on the benefits for the FE of unit tests, end to end
      integration tests, error tracking with tools such as DataDog and using
      recorded sessions for identification of gaps, problems and bottlenecks.
    </p>
  </div>
);

export default Skills;
