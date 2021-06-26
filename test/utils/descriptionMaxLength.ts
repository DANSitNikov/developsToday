const descriptionMaxLength = (string: string): string => {
    let copyString = string;

    if (copyString === undefined) return copyString;

    if (copyString.length > 120) copyString = `${copyString.slice(0, 117)}...`;

    return copyString;
};

export default descriptionMaxLength;
