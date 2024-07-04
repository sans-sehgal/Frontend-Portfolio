const PersonCard = ({person : {name, profession, accomplishment, imageId}}) => {

    // console.log(name)

    const getImageUrl = () => {
        return (
          'https://i.imgur.com/' +
          imageId +
          'm.jpg'
        );
    }

    return (
        <>
            <img
                src={getImageUrl()}
                alt={name}
            />
            <p>
            <b>{name}</b>
            {' ' + profession + ' '}
            known for {accomplishment}
            </p>
        </>
    );

      
}


export default PersonCard;