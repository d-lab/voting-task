import StatementContainer from "./statement-container.jsx";

const MissinformationAccessmentForm = ({ taskData, formRef }) => {
  const statements = Object.entries(taskData)
    .filter(([key]) => key.startsWith("statement"))
    .map(([_, value]) => JSON.parse(value));

  return (
    <div className="p-4">
      <form
        id="demographic-form"
        className="flex flex-col w-full"
        ref={formRef}
      >
        <h1 className="text-bold mb-6">Misinformation Assessment</h1>
        <div className="container flex flex-col content-start">
          <div className="w-full">
            <p className="py-4 text-left">
              In this task, you need to assess truthfulness level of 6
              statements made by US politicians.
            </p>
            <p className="py-4 text-left">
              Each statement can either be a TRUE statement if that statement
              was accurate and there’s nothing significant missing or a FALSE
              statement if it is not accurate and makes a ridiculous claim.
            </p>
            <p className="py-4 text-left">
              Also, if you reckon a statement is half true, you can choose the
              IN BETWEEN label.
            </p>
          </div>
        </div>

        <div className="container mx-auto w-full">
          <div className="flex flex-col w-full p-4">
            {statements.map(
              ({ statement_id, statement, speaker, year }, index) => (
                <StatementContainer
                  index={index}
                  key={statement_id}
                  statementId={statement_id}
                  statement={statement}
                  speaker={speaker}
                  year={year}
                />
              )
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default MissinformationAccessmentForm;
