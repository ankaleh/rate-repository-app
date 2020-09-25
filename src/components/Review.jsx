import React from 'react';

import { View, StyleSheet } from 'react-native';
import FormikTextInput from './FormikTextInput';
import Text from './Text';
//import TextInput from './TextInput';
import { Formik } from 'formik';
import theme from '../theme';
import * as yup from 'yup';
import { useHistory } from 'react-router-native';
import { CREATE_REVIEW } from '../graphql/mutations'


export const styles = StyleSheet.create({
    form: {
        display: 'flex',
        flexDirection: "column",
        justifyContent: "center",
        padding: 10,
    }, 
    formField: {
        borderRadius: 4,
        borderWidth: 0.5,
        padding: 10,
        margin: 10,
    },
    formButton: {
        flexDirection: "row",
        justifyContent: "center",
        borderRadius: 4,
        borderWidth: 0.5,
        padding: 10,
        backgroundColor: theme.colors.primary,
        margin: 10,
    },
    
  });

const ReviewForm = ( {onSubmit} ) => {

  return (
    <View style={styles.form}>
        <View >
            <FormikTextInput style={styles.formField} name="owner" placeholder="Repository owner name" />
        </View>
        <View >
            <FormikTextInput secureTextEntry style={styles.formField} name="name" placeholder="Repository name"/>
        </View>
        <View >
            <FormikTextInput secureTextEntry style={styles.formField} name="rating" placeholder="Rating between 0 and 100"/>
        </View>
        <View >
            <FormikTextInput multiline secureTextEntry style={styles.formField} name="text" placeholder="Review"/>
        </View>
        <View style={styles.formButton}>
            <TouchableWithoutFeedback onPress={onSubmit} >
                <Text color="textInTextBox" fontWeight="bold">Create a review</Text>
            </TouchableWithoutFeedback>
        </View>
    </View>
  );
        
};

const Review = () => {

    const history = useHistory();
    const [createReview , result ] = useMutation(CREATE_REVIEW);
    
    const onSubmit = async (values) => {
        const { name, owner, rating, text} = values;

        console.log('Tekstikenttiin kirjoitettiin: ', values); //values on olio, jolla kentät username ja password
        
        try {
             await createReview({ variables: {
                review: {
                    repositoryName: name,
                    ownerName: owner,
                    rating,
                    text
                }
              }
                
            })
        } catch (e) {
            console.log(e);
        }
        history.push('/');//juuri arvioituun repoon
        
    };
    
    const validationSchema = yup.object().shape({
        name: yup
            .string()    
            .required(''),
        owner: yup
            .string()
            .required(''),
        rating: yup
            .number()
            .max(100)
            .min(0),
        text: yup
            .string()
    });
    //Formikin sisällä (lapsena) on funktio, joka saa parametrikseen Formikin funktion, joka puolestaan annetaan 
    //kirjautumislomakkeelle propsina.
    return (
        <View>
            <Formik initialValues={{name: '', owner: '', rating: 0, text: ''}} 
            onSubmit={onSubmit} validationSchema={validationSchema}
            >
                {({handleSubmit}) => <ReviewForm onSubmit={handleSubmit} />} 
                
            </Formik>
        </View>
    );

    
  
};

export default Review;