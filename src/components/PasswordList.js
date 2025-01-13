const PasswordList = () => {

    const Password = [
        {
            'title':'Facebook',
            'password':'********'
        },
        {
            'title':'Twitter',
            'password':'********'
        },
        {
            'title':'Instagram',
            'password':'********'
        },
    ]
    return ( 
        <div className="password-list" style={{gap:'20px'}}>
            <h2>Mots de Passe</h2>
            <p>Voici la liste de vos mots de passe</p>
            <div className='list'>
                {Password.map((item, index) => (
                    <div className="password" key={index}>
                        <h2>{item.title}</h2>
                        <p>{item.password}</p>
                    </div>
                )
                )}
            </div>
        </div>
     );
}
 
export default PasswordList;