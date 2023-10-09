function calcTestGradeAvg(firstTestGrade, secondTestGrade) {
    const testGradeAvg = (firstTestGrade + secondTestGrade) / 2;
    return testGradeAvg;
}

const studentList = [
    {
        name: 'Marcos',
        firstTestGrade: 5,
        secondTestGrade: 8,
    },
    {
        name: 'Nestor',
        firstTestGrade: 10,
        secondTestGrade: 10,
    },
    {
        name: 'Nick',
        firstTestGrade: 4,
        secondTestGrade: 9,
    },
    {
        name: 'Pedro',
        firstTestGrade: 7,
        secondTestGrade: 7,
    },
    {
        name: 'Raquel',
        firstTestGrade: 10,
        secondTestGrade: 7,
    },
];

for (let student of studentList) {
    const studentAvg = calcTestGradeAvg(
        student.firstTestGrade,
        student.secondTestGrade
    );

    const studentMessage =
        studentAvg >= 7
            ? `Parabéns, ${student.name}! Você foi aprovado(a) no curso.`
            : `Não foi dessa vez ${student.name}! Tente novamente.`;

    alert(
        `A média do(a) aluno(a) ${student.name} é de: ${studentAvg}.
${studentMessage}`
    );
}
