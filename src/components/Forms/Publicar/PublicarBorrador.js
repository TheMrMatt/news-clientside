import React, { useRef, useContext, useState, useEffect } from 'react'
import { Container, Wrapper, FormulatioTitular, Formulario, ButtonCancel, ButtonSubmit, ButtonsWrapper, FileInput, FileLabel, InputContainer, TagsContainer, TagsWrapper, EliminarTag } from './Elements'
import { Editor } from '@tinymce/tinymce-react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup'
import Inputs from '../Inputs';
import { NotasContext } from '../../../Store/context/NotasContext'
import { useNavigate } from 'react-router-dom'
import { BorradorContext } from '../../../Store/context/BorradorContext';
import Tag from '../../Tag/Tag';

const PublicarBorrador = ({ nota }) => {
    const [selected, setSelected] = useState('')
    const [guardar, setGuardar] = useState(false);
    const [url, setUrl] = useState("")
    const [input, setInput] = useState('');
    const [tags, setTags] = useState([]);
    const [cate, setCate] = useState('');
    const [activ, setActiv] = useState(true);
    const [sub, setSub] = useState('');
    const editorRef = useRef(null);
    let history = useNavigate();
    let data = JSON.parse(localStorage.getItem('data'));
    const token = data.accessToken;
    const { addNota, startLoading } = useContext(NotasContext)
    const { addBorrador, deleteBorrador, updateBorrador } = useContext(BorradorContext)
    const deportes = [
        'Futbol',
        'Tenis',
        'Rugby'
    ]
    const espectaculos = [
        'Cine',
        'Teatro'
    ]

    useEffect(
        () => {
            setCate(nota.categoria);
            setSub(nota.subCategoria);
            nota.tags.map(tag => setTags(prevState => [...prevState, tag]))
        }, [])

    const onChange = (e) => {
        const { value } = e.target;
        setInput(value);
    };
    const onChangeC = (e) => {
        setActiv(false);
        setCate(e.target.value);

    };
    const onChangeS = (e) => {
        setSub(e.target.value);

    };
    const onKeyDown = (e) => {
        const { key } = e;
        const trimmedInput = input.trim();

        if (key === ',' && trimmedInput.length && !tags.includes(trimmedInput)) {
            e.preventDefault();
            setTags(prevState => [...prevState, trimmedInput]);
            setInput('');
        }
    };
    const deleteTag = (index) => {
        setTags(prevState => prevState.filter((tag, i) => i !== index))
    }
    const Opciones = (cate) => {
        if (cate === 'Deportes') {
            return (
                <>
                    {
                        deportes.map(dep => <option value={dep} >{dep}</option>)
                    }
                </>
            )
        } else if (cate === 'Espectaculos') {
            return (
                <>
                    {
                        espectaculos.map(esp => <option value={esp} >{esp}</option>)
                    }
                </>)
        }
    }
    let type = null;
    let options = null;

    if (selected === "Deportes") {
        type = deportes;
    } else if (selected === "Espectaculos") {
        type = espectaculos;
    }

    if (type) {
        options = type.map((el) => <option key={el}>{el}</option>);
    }
    return (
        <>
            <Container>
                <Wrapper>
                    <Formik
                        initialValues={{
                            titulo: `${nota.titulo}`,
                            categoria: `${nota.categoria}`,
                            subCategoria: `${nota.subCategoria ? nota.subCategoria : undefined}`,
                            img: `${nota.img[0].filename}`,
                            descripcion: `${nota.descripcion}`,

                        }}
                        validationSchema={Yup.object({
                            titulo: Yup.string()
                                .max(40, "Must be 40 characters or less")
                                .required("Required"),
                            categoria: Yup.string()
                                .required("Required"),
                            subCategoria: Yup.string(),

                            descripcion: Yup.string()
                                .required("Required"),


                        })}
                        onSubmit={values => {
                            let data = new FormData();
                            data.append("titulo", values.titulo)
                            data.append("categoria", cate)
                            data.append("subCategoria", sub)
                            data.append("descripcion", values.descripcion)
                            data.append("img", url)
                            data.append("contenido", editorRef.current.getContent())
                            tags.map((tag, index) => data.append("tags[]", tag))



                            if (guardar) {
                                startLoading()
                                updateBorrador(nota._id, data, () => history('/publicaciones', { replace: true }), token)
                            } else {
                                startLoading()
                                addNota(data, () => history('/publicaciones', { replace: true }), token)
                                deleteBorrador(nota._id, token)
                            }

                        }

                        }
                    >
                        {(formik) => (<Formulario className="form-cont" encType="multipart/form-data">
                            <FormulatioTitular>Nueva Publicacion</FormulatioTitular>
                            <Inputs
                                label="Titulo"
                                name="titulo"
                                type="text"
                                placeholder="juanito97"
                            />
                            <Inputs label="Categoria"
                                name="categoria"
                                id='categoria'
                                as="select"
                                placeholder=""
                                value={cate}
                                onChange={onChangeC}
                            >
                                <option value='none' >Selecciones una Opcion</option>
                                <option value="Deportes">Deportes</option>
                                <option value="Espectaculos">Espectaculos</option>
                                <option value="Tecnologia">Tecnologia</option>
                                <option value="Policiales">Policiales</option>

                            </Inputs>
                            <Inputs
                                label="Sub Categoria"
                                name="subCategoria"
                                as="select"
                                placeholder=""
                                value={sub}
                                onChange={onChangeS}
                                disabled={activ}
                            >
                                <option value='none' checked>Selecciones una Opcion</option>
                                {
                                    Opciones(cate)
                                }
                            </Inputs>
                            <InputContainer>
                                <FileLabel for='img'>Imagen</FileLabel>
                                <FileInput type="file" label="img" id='img' name="img" onChange={(event) => { setUrl(event.target.files[0]) }} />
                            </InputContainer>
                            <InputContainer>
                                {
                                    tags[0] ? <TagsContainer>
                                        <TagsWrapper>
                                            {
                                                tags.map((tag, index) => <Tag  >{tag}<EliminarTag type="button" onClick={() => deleteTag(index)}>x</EliminarTag></Tag>)
                                            }
                                        </TagsWrapper>
                                    </TagsContainer> : null
                                }

                                <Inputs
                                    label="Tags"
                                    name="tags"
                                    type="text"
                                    value={input}
                                    placeholder="Enter a tag"
                                    onKeyDown={onKeyDown}
                                    onChange={onChange}
                                />
                            </InputContainer>
                            <Inputs
                                label="Descripcion"
                                name="descripcion"
                                type="text"
                                placeholder="juanito97"
                            />
                            <Editor
                                onInit={(evt, editor) => editorRef.current = editor}
                                apiKey='nurxc5ela5l8uholgedkctj0mwmve9o9k730f6nm92s4zxti'
                                initialValue="<p>This is the initial content of the editor.</p>"

                                init={{
                                    height: 500,
                                    width: 750,
                                    menubar: false,
                                    plugins: [
                                        'advlist autolink lists link image charmap print preview anchor',
                                        'searchreplace visualblocks code fullscreen',
                                        'insertdatetime media table paste code help wordcount'
                                    ],
                                    toolbar: 'undo redo | formatselect | ' +
                                        'bold italic backcolor | alignleft aligncenter ' +
                                        'alignright alignjustify | bullist numlist outdent indent | ' +
                                        'removeformat | help',
                                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                }}
                            />
                            <ButtonsWrapper>
                                <ButtonCancel >Cancel</ButtonCancel>
                                <ButtonSubmit type="submit" onClick={() => setGuardar(true)}>Guardar</ButtonSubmit>
                                <ButtonSubmit type="submit" onClick={() => setGuardar(false)}>Publicar</ButtonSubmit>
                            </ButtonsWrapper>


                        </Formulario>)
                        }

                    </Formik>
                </Wrapper>
            </Container>
        </>
    )
}

export default PublicarBorrador
